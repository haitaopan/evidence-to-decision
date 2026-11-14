import type { CollectionEntry } from 'astro:content';
export type BlogLanguage = 'en' | 'zh';
export type LanguageView = 'all' | BlogLanguage;
export type EssayEntry = CollectionEntry<'essays'>;
export type EssayGroup = { key: string; en?: EssayEntry; zh?: EssayEntry };

export function groupEssays(posts: EssayEntry[]): EssayGroup[] {
  const groups = new Map<string, EssayGroup>();
  for (const post of posts) {
    const key = post.data.translationKey?.trim() || post.id;
    let group = groups.get(key);
    if (!group) { group = { key }; groups.set(key, group); }
    const lang = post.data.lang as BlogLanguage;
    if (group[lang] && group[lang]?.id !== post.id) throw new Error(`Duplicate ${lang} edition in group ${key}`);
    group[lang] = post;
  }
  return Array.from(groups.values());
}

export function selectedEdition(group: EssayGroup, view: LanguageView): EssayEntry | undefined {
  if (view === 'en') return group.en;
  if (view === 'zh') return group.zh;
  if (!group.en) return group.zh;
  if (!group.zh) return group.en;
  // In the All feed, lead with the newest edition; prefer English on a tie.
  return group.zh.data.pubDate.valueOf() > group.en.data.pubDate.valueOf() ? group.zh : group.en;
}

export function sortedGroups(posts: EssayEntry[], view: LanguageView = 'all'): EssayGroup[] {
  return groupEssays(posts)
    .filter(group => selectedEdition(group, view) !== undefined)
    .sort((a, b) => {
      const x = selectedEdition(a, view)!;
      const y = selectedEdition(b, view)!;
      return y.data.pubDate.valueOf() - x.data.pubDate.valueOf() || x.data.title.localeCompare(y.data.title);
    });
}
