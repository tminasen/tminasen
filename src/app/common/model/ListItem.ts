export interface LinkListItem {
  readonly linkUrl: string,
  readonly linkText: string,
  readonly description?: string,
  readonly icon?: string
}

export interface SkillListItem {
  readonly skill: string,
  readonly experience: number,
  readonly icon: string
}
