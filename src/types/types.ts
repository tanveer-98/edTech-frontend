export type DocsList = Array<{ name: string; url: string }>;

export interface INotice {
  id?: string;
  dateCreated?: Date;
  notice?: string;
}

export interface INoticeEdit {
  id: string;
  notice?: string;
  dateCreated? : Date;
}
