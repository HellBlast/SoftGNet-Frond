export interface Schedules{
    id?: number;
    router_id: number;
    week_num: number;
    from: Date;
    to: Date;
    active: boolean;
}