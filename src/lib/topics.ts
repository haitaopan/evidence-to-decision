export const TOPICS = ['Clinical Trials','Evidence & Decisions','Oncology & Rare Diseases','External Controls','DSMB & Monitoring','AI & Methods'] as const;
export function topicSlug(value: string) { return value.toLowerCase().normalize('NFKD').replace(/&/g,'and').replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''); }
