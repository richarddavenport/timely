import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: any;
  uuid: any;
};


/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>;
  _gt?: Maybe<Scalars['Int']>;
  _gte?: Maybe<Scalars['Int']>;
  _in?: Maybe<Array<Scalars['Int']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['Int']>;
  _lte?: Maybe<Scalars['Int']>;
  _neq?: Maybe<Scalars['Int']>;
  _nin?: Maybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>;
  _gt?: Maybe<Scalars['String']>;
  _gte?: Maybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: Maybe<Scalars['String']>;
  _in?: Maybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: Maybe<Scalars['String']>;
  _is_null?: Maybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: Maybe<Scalars['String']>;
  _lt?: Maybe<Scalars['String']>;
  _lte?: Maybe<Scalars['String']>;
  _neq?: Maybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: Maybe<Scalars['String']>;
  _nin?: Maybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: Maybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: Maybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: Maybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: Maybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: Maybe<Scalars['String']>;
};

/** columns and relationships of "event" */
export type Event = {
  __typename?: 'event';
  age_range: Scalars['String'];
  created_at: Scalars['timestamptz'];
  /** An array relationship */
  heat: Array<Heat>;
  /** An aggregate relationship */
  heat_aggregate: Heat_Aggregate;
  id: Scalars['uuid'];
  /** An object relationship */
  meet: Meet;
  meet_id: Scalars['uuid'];
  name: Scalars['String'];
  number: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "event" */
export type EventHeatArgs = {
  distinct_on?: Maybe<Array<Heat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Heat_Order_By>>;
  where?: Maybe<Heat_Bool_Exp>;
};


/** columns and relationships of "event" */
export type EventHeat_AggregateArgs = {
  distinct_on?: Maybe<Array<Heat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Heat_Order_By>>;
  where?: Maybe<Heat_Bool_Exp>;
};

/** aggregated selection of "event" */
export type Event_Aggregate = {
  __typename?: 'event_aggregate';
  aggregate?: Maybe<Event_Aggregate_Fields>;
  nodes: Array<Event>;
};

/** aggregate fields of "event" */
export type Event_Aggregate_Fields = {
  __typename?: 'event_aggregate_fields';
  avg?: Maybe<Event_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Event_Max_Fields>;
  min?: Maybe<Event_Min_Fields>;
  stddev?: Maybe<Event_Stddev_Fields>;
  stddev_pop?: Maybe<Event_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Event_Stddev_Samp_Fields>;
  sum?: Maybe<Event_Sum_Fields>;
  var_pop?: Maybe<Event_Var_Pop_Fields>;
  var_samp?: Maybe<Event_Var_Samp_Fields>;
  variance?: Maybe<Event_Variance_Fields>;
};


/** aggregate fields of "event" */
export type Event_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Event_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "event" */
export type Event_Aggregate_Order_By = {
  avg?: Maybe<Event_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Event_Max_Order_By>;
  min?: Maybe<Event_Min_Order_By>;
  stddev?: Maybe<Event_Stddev_Order_By>;
  stddev_pop?: Maybe<Event_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Event_Stddev_Samp_Order_By>;
  sum?: Maybe<Event_Sum_Order_By>;
  var_pop?: Maybe<Event_Var_Pop_Order_By>;
  var_samp?: Maybe<Event_Var_Samp_Order_By>;
  variance?: Maybe<Event_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "event" */
export type Event_Arr_Rel_Insert_Input = {
  data: Array<Event_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Event_On_Conflict>;
};

/** aggregate avg on columns */
export type Event_Avg_Fields = {
  __typename?: 'event_avg_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "event" */
export type Event_Avg_Order_By = {
  number?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "event". All fields are combined with a logical 'AND'. */
export type Event_Bool_Exp = {
  _and?: Maybe<Array<Event_Bool_Exp>>;
  _not?: Maybe<Event_Bool_Exp>;
  _or?: Maybe<Array<Event_Bool_Exp>>;
  age_range?: Maybe<String_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  heat?: Maybe<Heat_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meet?: Maybe<Meet_Bool_Exp>;
  meet_id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  number?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "event" */
export enum Event_Constraint {
  /** unique or primary key constraint */
  EventPkey = 'event_pkey'
}

/** input type for incrementing numeric columns in table "event" */
export type Event_Inc_Input = {
  number?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "event" */
export type Event_Insert_Input = {
  age_range?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  heat?: Maybe<Heat_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  meet?: Maybe<Meet_Obj_Rel_Insert_Input>;
  meet_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Event_Max_Fields = {
  __typename?: 'event_max_fields';
  age_range?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meet_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "event" */
export type Event_Max_Order_By = {
  age_range?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meet_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Event_Min_Fields = {
  __typename?: 'event_min_fields';
  age_range?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meet_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "event" */
export type Event_Min_Order_By = {
  age_range?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  meet_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "event" */
export type Event_Mutation_Response = {
  __typename?: 'event_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Event>;
};

/** input type for inserting object relation for remote table "event" */
export type Event_Obj_Rel_Insert_Input = {
  data: Event_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Event_On_Conflict>;
};

/** on conflict condition type for table "event" */
export type Event_On_Conflict = {
  constraint: Event_Constraint;
  update_columns?: Array<Event_Update_Column>;
  where?: Maybe<Event_Bool_Exp>;
};

/** Ordering options when selecting data from "event". */
export type Event_Order_By = {
  age_range?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  heat_aggregate?: Maybe<Heat_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  meet?: Maybe<Meet_Order_By>;
  meet_id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: event */
export type Event_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "event" */
export enum Event_Select_Column {
  /** column name */
  AgeRange = 'age_range',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MeetId = 'meet_id',
  /** column name */
  Name = 'name',
  /** column name */
  Number = 'number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "event" */
export type Event_Set_Input = {
  age_range?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  meet_id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Event_Stddev_Fields = {
  __typename?: 'event_stddev_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "event" */
export type Event_Stddev_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Event_Stddev_Pop_Fields = {
  __typename?: 'event_stddev_pop_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "event" */
export type Event_Stddev_Pop_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Event_Stddev_Samp_Fields = {
  __typename?: 'event_stddev_samp_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "event" */
export type Event_Stddev_Samp_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Event_Sum_Fields = {
  __typename?: 'event_sum_fields';
  number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "event" */
export type Event_Sum_Order_By = {
  number?: Maybe<Order_By>;
};

/** update columns of table "event" */
export enum Event_Update_Column {
  /** column name */
  AgeRange = 'age_range',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  MeetId = 'meet_id',
  /** column name */
  Name = 'name',
  /** column name */
  Number = 'number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Event_Var_Pop_Fields = {
  __typename?: 'event_var_pop_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "event" */
export type Event_Var_Pop_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Event_Var_Samp_Fields = {
  __typename?: 'event_var_samp_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "event" */
export type Event_Var_Samp_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Event_Variance_Fields = {
  __typename?: 'event_variance_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "event" */
export type Event_Variance_Order_By = {
  number?: Maybe<Order_By>;
};

/** columns and relationships of "heat" */
export type Heat = {
  __typename?: 'heat';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  event: Event;
  event_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An array relationship */
  lanes: Array<Lane>;
  /** An aggregate relationship */
  lanes_aggregate: Lane_Aggregate;
  number: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "heat" */
export type HeatLanesArgs = {
  distinct_on?: Maybe<Array<Lane_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Order_By>>;
  where?: Maybe<Lane_Bool_Exp>;
};


/** columns and relationships of "heat" */
export type HeatLanes_AggregateArgs = {
  distinct_on?: Maybe<Array<Lane_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Order_By>>;
  where?: Maybe<Lane_Bool_Exp>;
};

/** aggregated selection of "heat" */
export type Heat_Aggregate = {
  __typename?: 'heat_aggregate';
  aggregate?: Maybe<Heat_Aggregate_Fields>;
  nodes: Array<Heat>;
};

/** aggregate fields of "heat" */
export type Heat_Aggregate_Fields = {
  __typename?: 'heat_aggregate_fields';
  avg?: Maybe<Heat_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Heat_Max_Fields>;
  min?: Maybe<Heat_Min_Fields>;
  stddev?: Maybe<Heat_Stddev_Fields>;
  stddev_pop?: Maybe<Heat_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Heat_Stddev_Samp_Fields>;
  sum?: Maybe<Heat_Sum_Fields>;
  var_pop?: Maybe<Heat_Var_Pop_Fields>;
  var_samp?: Maybe<Heat_Var_Samp_Fields>;
  variance?: Maybe<Heat_Variance_Fields>;
};


/** aggregate fields of "heat" */
export type Heat_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Heat_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "heat" */
export type Heat_Aggregate_Order_By = {
  avg?: Maybe<Heat_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Heat_Max_Order_By>;
  min?: Maybe<Heat_Min_Order_By>;
  stddev?: Maybe<Heat_Stddev_Order_By>;
  stddev_pop?: Maybe<Heat_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Heat_Stddev_Samp_Order_By>;
  sum?: Maybe<Heat_Sum_Order_By>;
  var_pop?: Maybe<Heat_Var_Pop_Order_By>;
  var_samp?: Maybe<Heat_Var_Samp_Order_By>;
  variance?: Maybe<Heat_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "heat" */
export type Heat_Arr_Rel_Insert_Input = {
  data: Array<Heat_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Heat_On_Conflict>;
};

/** aggregate avg on columns */
export type Heat_Avg_Fields = {
  __typename?: 'heat_avg_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "heat" */
export type Heat_Avg_Order_By = {
  number?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "heat". All fields are combined with a logical 'AND'. */
export type Heat_Bool_Exp = {
  _and?: Maybe<Array<Heat_Bool_Exp>>;
  _not?: Maybe<Heat_Bool_Exp>;
  _or?: Maybe<Array<Heat_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  event?: Maybe<Event_Bool_Exp>;
  event_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lanes?: Maybe<Lane_Bool_Exp>;
  number?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "heat" */
export enum Heat_Constraint {
  /** unique or primary key constraint */
  HeatPkey = 'heat_pkey'
}

/** input type for incrementing numeric columns in table "heat" */
export type Heat_Inc_Input = {
  number?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "heat" */
export type Heat_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  event?: Maybe<Event_Obj_Rel_Insert_Input>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lanes?: Maybe<Lane_Arr_Rel_Insert_Input>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Heat_Max_Fields = {
  __typename?: 'heat_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "heat" */
export type Heat_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  event_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Heat_Min_Fields = {
  __typename?: 'heat_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "heat" */
export type Heat_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  event_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "heat" */
export type Heat_Mutation_Response = {
  __typename?: 'heat_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Heat>;
};

/** input type for inserting object relation for remote table "heat" */
export type Heat_Obj_Rel_Insert_Input = {
  data: Heat_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Heat_On_Conflict>;
};

/** on conflict condition type for table "heat" */
export type Heat_On_Conflict = {
  constraint: Heat_Constraint;
  update_columns?: Array<Heat_Update_Column>;
  where?: Maybe<Heat_Bool_Exp>;
};

/** Ordering options when selecting data from "heat". */
export type Heat_Order_By = {
  created_at?: Maybe<Order_By>;
  event?: Maybe<Event_Order_By>;
  event_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lanes_aggregate?: Maybe<Lane_Aggregate_Order_By>;
  number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: heat */
export type Heat_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "heat" */
export enum Heat_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "heat" */
export type Heat_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  event_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Heat_Stddev_Fields = {
  __typename?: 'heat_stddev_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "heat" */
export type Heat_Stddev_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Heat_Stddev_Pop_Fields = {
  __typename?: 'heat_stddev_pop_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "heat" */
export type Heat_Stddev_Pop_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Heat_Stddev_Samp_Fields = {
  __typename?: 'heat_stddev_samp_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "heat" */
export type Heat_Stddev_Samp_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Heat_Sum_Fields = {
  __typename?: 'heat_sum_fields';
  number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "heat" */
export type Heat_Sum_Order_By = {
  number?: Maybe<Order_By>;
};

/** update columns of table "heat" */
export enum Heat_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  EventId = 'event_id',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Heat_Var_Pop_Fields = {
  __typename?: 'heat_var_pop_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "heat" */
export type Heat_Var_Pop_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Heat_Var_Samp_Fields = {
  __typename?: 'heat_var_samp_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "heat" */
export type Heat_Var_Samp_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Heat_Variance_Fields = {
  __typename?: 'heat_variance_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "heat" */
export type Heat_Variance_Order_By = {
  number?: Maybe<Order_By>;
};

/** columns and relationships of "lane" */
export type Lane = {
  __typename?: 'lane';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  heat: Heat;
  heat_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An array relationship */
  lane_swimmers: Array<Lane_Swimmer>;
  /** An aggregate relationship */
  lane_swimmers_aggregate: Lane_Swimmer_Aggregate;
  number: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "lane" */
export type LaneLane_SwimmersArgs = {
  distinct_on?: Maybe<Array<Lane_Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Swimmer_Order_By>>;
  where?: Maybe<Lane_Swimmer_Bool_Exp>;
};


/** columns and relationships of "lane" */
export type LaneLane_Swimmers_AggregateArgs = {
  distinct_on?: Maybe<Array<Lane_Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Swimmer_Order_By>>;
  where?: Maybe<Lane_Swimmer_Bool_Exp>;
};

/** aggregated selection of "lane" */
export type Lane_Aggregate = {
  __typename?: 'lane_aggregate';
  aggregate?: Maybe<Lane_Aggregate_Fields>;
  nodes: Array<Lane>;
};

/** aggregate fields of "lane" */
export type Lane_Aggregate_Fields = {
  __typename?: 'lane_aggregate_fields';
  avg?: Maybe<Lane_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Lane_Max_Fields>;
  min?: Maybe<Lane_Min_Fields>;
  stddev?: Maybe<Lane_Stddev_Fields>;
  stddev_pop?: Maybe<Lane_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Lane_Stddev_Samp_Fields>;
  sum?: Maybe<Lane_Sum_Fields>;
  var_pop?: Maybe<Lane_Var_Pop_Fields>;
  var_samp?: Maybe<Lane_Var_Samp_Fields>;
  variance?: Maybe<Lane_Variance_Fields>;
};


/** aggregate fields of "lane" */
export type Lane_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lane_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "lane" */
export type Lane_Aggregate_Order_By = {
  avg?: Maybe<Lane_Avg_Order_By>;
  count?: Maybe<Order_By>;
  max?: Maybe<Lane_Max_Order_By>;
  min?: Maybe<Lane_Min_Order_By>;
  stddev?: Maybe<Lane_Stddev_Order_By>;
  stddev_pop?: Maybe<Lane_Stddev_Pop_Order_By>;
  stddev_samp?: Maybe<Lane_Stddev_Samp_Order_By>;
  sum?: Maybe<Lane_Sum_Order_By>;
  var_pop?: Maybe<Lane_Var_Pop_Order_By>;
  var_samp?: Maybe<Lane_Var_Samp_Order_By>;
  variance?: Maybe<Lane_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "lane" */
export type Lane_Arr_Rel_Insert_Input = {
  data: Array<Lane_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Lane_On_Conflict>;
};

/** aggregate avg on columns */
export type Lane_Avg_Fields = {
  __typename?: 'lane_avg_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "lane" */
export type Lane_Avg_Order_By = {
  number?: Maybe<Order_By>;
};

/** Boolean expression to filter rows from the table "lane". All fields are combined with a logical 'AND'. */
export type Lane_Bool_Exp = {
  _and?: Maybe<Array<Lane_Bool_Exp>>;
  _not?: Maybe<Lane_Bool_Exp>;
  _or?: Maybe<Array<Lane_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  heat?: Maybe<Heat_Bool_Exp>;
  heat_id?: Maybe<Uuid_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lane_swimmers?: Maybe<Lane_Swimmer_Bool_Exp>;
  number?: Maybe<Int_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "lane" */
export enum Lane_Constraint {
  /** unique or primary key constraint */
  LanePkey = 'lane_pkey'
}

/** input type for incrementing numeric columns in table "lane" */
export type Lane_Inc_Input = {
  number?: Maybe<Scalars['Int']>;
};

/** input type for inserting data into table "lane" */
export type Lane_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  heat?: Maybe<Heat_Obj_Rel_Insert_Input>;
  heat_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  lane_swimmers?: Maybe<Lane_Swimmer_Arr_Rel_Insert_Input>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Lane_Max_Fields = {
  __typename?: 'lane_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  heat_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "lane" */
export type Lane_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  heat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lane_Min_Fields = {
  __typename?: 'lane_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  heat_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "lane" */
export type Lane_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  heat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "lane" */
export type Lane_Mutation_Response = {
  __typename?: 'lane_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lane>;
};

/** input type for inserting object relation for remote table "lane" */
export type Lane_Obj_Rel_Insert_Input = {
  data: Lane_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Lane_On_Conflict>;
};

/** on conflict condition type for table "lane" */
export type Lane_On_Conflict = {
  constraint: Lane_Constraint;
  update_columns?: Array<Lane_Update_Column>;
  where?: Maybe<Lane_Bool_Exp>;
};

/** Ordering options when selecting data from "lane". */
export type Lane_Order_By = {
  created_at?: Maybe<Order_By>;
  heat?: Maybe<Heat_Order_By>;
  heat_id?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lane_swimmers_aggregate?: Maybe<Lane_Swimmer_Aggregate_Order_By>;
  number?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: lane */
export type Lane_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "lane" */
export enum Lane_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HeatId = 'heat_id',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "lane" */
export type Lane_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  heat_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Lane_Stddev_Fields = {
  __typename?: 'lane_stddev_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "lane" */
export type Lane_Stddev_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Lane_Stddev_Pop_Fields = {
  __typename?: 'lane_stddev_pop_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "lane" */
export type Lane_Stddev_Pop_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Lane_Stddev_Samp_Fields = {
  __typename?: 'lane_stddev_samp_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "lane" */
export type Lane_Stddev_Samp_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate sum on columns */
export type Lane_Sum_Fields = {
  __typename?: 'lane_sum_fields';
  number?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "lane" */
export type Lane_Sum_Order_By = {
  number?: Maybe<Order_By>;
};

/** columns and relationships of "lane_swimmer" */
export type Lane_Swimmer = {
  __typename?: 'lane_swimmer';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  lane: Lane;
  lane_id: Scalars['uuid'];
  /** An object relationship */
  swimmer: Swimmer;
  swimmer_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "lane_swimmer" */
export type Lane_Swimmer_Aggregate = {
  __typename?: 'lane_swimmer_aggregate';
  aggregate?: Maybe<Lane_Swimmer_Aggregate_Fields>;
  nodes: Array<Lane_Swimmer>;
};

/** aggregate fields of "lane_swimmer" */
export type Lane_Swimmer_Aggregate_Fields = {
  __typename?: 'lane_swimmer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Lane_Swimmer_Max_Fields>;
  min?: Maybe<Lane_Swimmer_Min_Fields>;
};


/** aggregate fields of "lane_swimmer" */
export type Lane_Swimmer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Lane_Swimmer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "lane_swimmer" */
export type Lane_Swimmer_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Lane_Swimmer_Max_Order_By>;
  min?: Maybe<Lane_Swimmer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "lane_swimmer" */
export type Lane_Swimmer_Arr_Rel_Insert_Input = {
  data: Array<Lane_Swimmer_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Lane_Swimmer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "lane_swimmer". All fields are combined with a logical 'AND'. */
export type Lane_Swimmer_Bool_Exp = {
  _and?: Maybe<Array<Lane_Swimmer_Bool_Exp>>;
  _not?: Maybe<Lane_Swimmer_Bool_Exp>;
  _or?: Maybe<Array<Lane_Swimmer_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  lane?: Maybe<Lane_Bool_Exp>;
  lane_id?: Maybe<Uuid_Comparison_Exp>;
  swimmer?: Maybe<Swimmer_Bool_Exp>;
  swimmer_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "lane_swimmer" */
export enum Lane_Swimmer_Constraint {
  /** unique or primary key constraint */
  LaneSwimmerPkey = 'lane_swimmer_pkey'
}

/** input type for inserting data into table "lane_swimmer" */
export type Lane_Swimmer_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lane?: Maybe<Lane_Obj_Rel_Insert_Input>;
  lane_id?: Maybe<Scalars['uuid']>;
  swimmer?: Maybe<Swimmer_Obj_Rel_Insert_Input>;
  swimmer_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Lane_Swimmer_Max_Fields = {
  __typename?: 'lane_swimmer_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lane_id?: Maybe<Scalars['uuid']>;
  swimmer_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "lane_swimmer" */
export type Lane_Swimmer_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lane_id?: Maybe<Order_By>;
  swimmer_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Lane_Swimmer_Min_Fields = {
  __typename?: 'lane_swimmer_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lane_id?: Maybe<Scalars['uuid']>;
  swimmer_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "lane_swimmer" */
export type Lane_Swimmer_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lane_id?: Maybe<Order_By>;
  swimmer_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "lane_swimmer" */
export type Lane_Swimmer_Mutation_Response = {
  __typename?: 'lane_swimmer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Lane_Swimmer>;
};

/** on conflict condition type for table "lane_swimmer" */
export type Lane_Swimmer_On_Conflict = {
  constraint: Lane_Swimmer_Constraint;
  update_columns?: Array<Lane_Swimmer_Update_Column>;
  where?: Maybe<Lane_Swimmer_Bool_Exp>;
};

/** Ordering options when selecting data from "lane_swimmer". */
export type Lane_Swimmer_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  lane?: Maybe<Lane_Order_By>;
  lane_id?: Maybe<Order_By>;
  swimmer?: Maybe<Swimmer_Order_By>;
  swimmer_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: lane_swimmer */
export type Lane_Swimmer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "lane_swimmer" */
export enum Lane_Swimmer_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LaneId = 'lane_id',
  /** column name */
  SwimmerId = 'swimmer_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "lane_swimmer" */
export type Lane_Swimmer_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  lane_id?: Maybe<Scalars['uuid']>;
  swimmer_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "lane_swimmer" */
export enum Lane_Swimmer_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  LaneId = 'lane_id',
  /** column name */
  SwimmerId = 'swimmer_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** update columns of table "lane" */
export enum Lane_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  HeatId = 'heat_id',
  /** column name */
  Id = 'id',
  /** column name */
  Number = 'number',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Lane_Var_Pop_Fields = {
  __typename?: 'lane_var_pop_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "lane" */
export type Lane_Var_Pop_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Lane_Var_Samp_Fields = {
  __typename?: 'lane_var_samp_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "lane" */
export type Lane_Var_Samp_Order_By = {
  number?: Maybe<Order_By>;
};

/** aggregate variance on columns */
export type Lane_Variance_Fields = {
  __typename?: 'lane_variance_fields';
  number?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "lane" */
export type Lane_Variance_Order_By = {
  number?: Maybe<Order_By>;
};

/** columns and relationships of "meet" */
export type Meet = {
  __typename?: 'meet';
  created_at: Scalars['timestamptz'];
  date: Scalars['timestamptz'];
  /** An array relationship */
  events: Array<Event>;
  /** An aggregate relationship */
  events_aggregate: Event_Aggregate;
  id: Scalars['uuid'];
  /** An array relationship */
  meet_teams: Array<Meet_Team>;
  /** An aggregate relationship */
  meet_teams_aggregate: Meet_Team_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "meet" */
export type MeetEventsArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};


/** columns and relationships of "meet" */
export type MeetEvents_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};


/** columns and relationships of "meet" */
export type MeetMeet_TeamsArgs = {
  distinct_on?: Maybe<Array<Meet_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Team_Order_By>>;
  where?: Maybe<Meet_Team_Bool_Exp>;
};


/** columns and relationships of "meet" */
export type MeetMeet_Teams_AggregateArgs = {
  distinct_on?: Maybe<Array<Meet_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Team_Order_By>>;
  where?: Maybe<Meet_Team_Bool_Exp>;
};

/** aggregated selection of "meet" */
export type Meet_Aggregate = {
  __typename?: 'meet_aggregate';
  aggregate?: Maybe<Meet_Aggregate_Fields>;
  nodes: Array<Meet>;
};

/** aggregate fields of "meet" */
export type Meet_Aggregate_Fields = {
  __typename?: 'meet_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Meet_Max_Fields>;
  min?: Maybe<Meet_Min_Fields>;
};


/** aggregate fields of "meet" */
export type Meet_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Meet_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "meet". All fields are combined with a logical 'AND'. */
export type Meet_Bool_Exp = {
  _and?: Maybe<Array<Meet_Bool_Exp>>;
  _not?: Maybe<Meet_Bool_Exp>;
  _or?: Maybe<Array<Meet_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  date?: Maybe<Timestamptz_Comparison_Exp>;
  events?: Maybe<Event_Bool_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  meet_teams?: Maybe<Meet_Team_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "meet" */
export enum Meet_Constraint {
  /** unique or primary key constraint */
  MeetPkey = 'meet_pkey'
}

/** input type for inserting data into table "meet" */
export type Meet_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['timestamptz']>;
  events?: Maybe<Event_Arr_Rel_Insert_Input>;
  id?: Maybe<Scalars['uuid']>;
  meet_teams?: Maybe<Meet_Team_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Meet_Max_Fields = {
  __typename?: 'meet_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Meet_Min_Fields = {
  __typename?: 'meet_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "meet" */
export type Meet_Mutation_Response = {
  __typename?: 'meet_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Meet>;
};

/** input type for inserting object relation for remote table "meet" */
export type Meet_Obj_Rel_Insert_Input = {
  data: Meet_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Meet_On_Conflict>;
};

/** on conflict condition type for table "meet" */
export type Meet_On_Conflict = {
  constraint: Meet_Constraint;
  update_columns?: Array<Meet_Update_Column>;
  where?: Maybe<Meet_Bool_Exp>;
};

/** Ordering options when selecting data from "meet". */
export type Meet_Order_By = {
  created_at?: Maybe<Order_By>;
  date?: Maybe<Order_By>;
  events_aggregate?: Maybe<Event_Aggregate_Order_By>;
  id?: Maybe<Order_By>;
  meet_teams_aggregate?: Maybe<Meet_Team_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: meet */
export type Meet_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "meet" */
export enum Meet_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "meet" */
export type Meet_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** columns and relationships of "meet_team" */
export type Meet_Team = {
  __typename?: 'meet_team';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  meet: Meet;
  meet_id: Scalars['uuid'];
  /** An object relationship */
  team: Team;
  team_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "meet_team" */
export type Meet_Team_Aggregate = {
  __typename?: 'meet_team_aggregate';
  aggregate?: Maybe<Meet_Team_Aggregate_Fields>;
  nodes: Array<Meet_Team>;
};

/** aggregate fields of "meet_team" */
export type Meet_Team_Aggregate_Fields = {
  __typename?: 'meet_team_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Meet_Team_Max_Fields>;
  min?: Maybe<Meet_Team_Min_Fields>;
};


/** aggregate fields of "meet_team" */
export type Meet_Team_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Meet_Team_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "meet_team" */
export type Meet_Team_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Meet_Team_Max_Order_By>;
  min?: Maybe<Meet_Team_Min_Order_By>;
};

/** input type for inserting array relation for remote table "meet_team" */
export type Meet_Team_Arr_Rel_Insert_Input = {
  data: Array<Meet_Team_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Meet_Team_On_Conflict>;
};

/** Boolean expression to filter rows from the table "meet_team". All fields are combined with a logical 'AND'. */
export type Meet_Team_Bool_Exp = {
  _and?: Maybe<Array<Meet_Team_Bool_Exp>>;
  _not?: Maybe<Meet_Team_Bool_Exp>;
  _or?: Maybe<Array<Meet_Team_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  meet?: Maybe<Meet_Bool_Exp>;
  meet_id?: Maybe<Uuid_Comparison_Exp>;
  team?: Maybe<Team_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "meet_team" */
export enum Meet_Team_Constraint {
  /** unique or primary key constraint */
  MeetTeamPkey = 'meet_team_pkey'
}

/** input type for inserting data into table "meet_team" */
export type Meet_Team_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  meet?: Maybe<Meet_Obj_Rel_Insert_Input>;
  meet_id?: Maybe<Scalars['uuid']>;
  team?: Maybe<Team_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Meet_Team_Max_Fields = {
  __typename?: 'meet_team_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  meet_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "meet_team" */
export type Meet_Team_Max_Order_By = {
  created_at?: Maybe<Order_By>;
  meet_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Meet_Team_Min_Fields = {
  __typename?: 'meet_team_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  meet_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "meet_team" */
export type Meet_Team_Min_Order_By = {
  created_at?: Maybe<Order_By>;
  meet_id?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "meet_team" */
export type Meet_Team_Mutation_Response = {
  __typename?: 'meet_team_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Meet_Team>;
};

/** on conflict condition type for table "meet_team" */
export type Meet_Team_On_Conflict = {
  constraint: Meet_Team_Constraint;
  update_columns?: Array<Meet_Team_Update_Column>;
  where?: Maybe<Meet_Team_Bool_Exp>;
};

/** Ordering options when selecting data from "meet_team". */
export type Meet_Team_Order_By = {
  created_at?: Maybe<Order_By>;
  meet?: Maybe<Meet_Order_By>;
  meet_id?: Maybe<Order_By>;
  team?: Maybe<Team_Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: meet_team */
export type Meet_Team_Pk_Columns_Input = {
  meet_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};

/** select columns of table "meet_team" */
export enum Meet_Team_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MeetId = 'meet_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "meet_team" */
export type Meet_Team_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  meet_id?: Maybe<Scalars['uuid']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "meet_team" */
export enum Meet_Team_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  MeetId = 'meet_id',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** update columns of table "meet" */
export enum Meet_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Date = 'date',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "event" */
  delete_event?: Maybe<Event_Mutation_Response>;
  /** delete single row from the table: "event" */
  delete_event_by_pk?: Maybe<Event>;
  /** delete data from the table: "heat" */
  delete_heat?: Maybe<Heat_Mutation_Response>;
  /** delete single row from the table: "heat" */
  delete_heat_by_pk?: Maybe<Heat>;
  /** delete data from the table: "lane" */
  delete_lane?: Maybe<Lane_Mutation_Response>;
  /** delete single row from the table: "lane" */
  delete_lane_by_pk?: Maybe<Lane>;
  /** delete data from the table: "lane_swimmer" */
  delete_lane_swimmer?: Maybe<Lane_Swimmer_Mutation_Response>;
  /** delete single row from the table: "lane_swimmer" */
  delete_lane_swimmer_by_pk?: Maybe<Lane_Swimmer>;
  /** delete data from the table: "meet" */
  delete_meet?: Maybe<Meet_Mutation_Response>;
  /** delete single row from the table: "meet" */
  delete_meet_by_pk?: Maybe<Meet>;
  /** delete data from the table: "meet_team" */
  delete_meet_team?: Maybe<Meet_Team_Mutation_Response>;
  /** delete single row from the table: "meet_team" */
  delete_meet_team_by_pk?: Maybe<Meet_Team>;
  /** delete data from the table: "swimmer" */
  delete_swimmer?: Maybe<Swimmer_Mutation_Response>;
  /** delete single row from the table: "swimmer" */
  delete_swimmer_by_pk?: Maybe<Swimmer>;
  /** delete data from the table: "team" */
  delete_team?: Maybe<Team_Mutation_Response>;
  /** delete single row from the table: "team" */
  delete_team_by_pk?: Maybe<Team>;
  /** insert data into the table: "event" */
  insert_event?: Maybe<Event_Mutation_Response>;
  /** insert a single row into the table: "event" */
  insert_event_one?: Maybe<Event>;
  /** insert data into the table: "heat" */
  insert_heat?: Maybe<Heat_Mutation_Response>;
  /** insert a single row into the table: "heat" */
  insert_heat_one?: Maybe<Heat>;
  /** insert data into the table: "lane" */
  insert_lane?: Maybe<Lane_Mutation_Response>;
  /** insert a single row into the table: "lane" */
  insert_lane_one?: Maybe<Lane>;
  /** insert data into the table: "lane_swimmer" */
  insert_lane_swimmer?: Maybe<Lane_Swimmer_Mutation_Response>;
  /** insert a single row into the table: "lane_swimmer" */
  insert_lane_swimmer_one?: Maybe<Lane_Swimmer>;
  /** insert data into the table: "meet" */
  insert_meet?: Maybe<Meet_Mutation_Response>;
  /** insert a single row into the table: "meet" */
  insert_meet_one?: Maybe<Meet>;
  /** insert data into the table: "meet_team" */
  insert_meet_team?: Maybe<Meet_Team_Mutation_Response>;
  /** insert a single row into the table: "meet_team" */
  insert_meet_team_one?: Maybe<Meet_Team>;
  /** insert data into the table: "swimmer" */
  insert_swimmer?: Maybe<Swimmer_Mutation_Response>;
  /** insert a single row into the table: "swimmer" */
  insert_swimmer_one?: Maybe<Swimmer>;
  /** insert data into the table: "team" */
  insert_team?: Maybe<Team_Mutation_Response>;
  /** insert a single row into the table: "team" */
  insert_team_one?: Maybe<Team>;
  /** update data of the table: "event" */
  update_event?: Maybe<Event_Mutation_Response>;
  /** update single row of the table: "event" */
  update_event_by_pk?: Maybe<Event>;
  /** update data of the table: "heat" */
  update_heat?: Maybe<Heat_Mutation_Response>;
  /** update single row of the table: "heat" */
  update_heat_by_pk?: Maybe<Heat>;
  /** update data of the table: "lane" */
  update_lane?: Maybe<Lane_Mutation_Response>;
  /** update single row of the table: "lane" */
  update_lane_by_pk?: Maybe<Lane>;
  /** update data of the table: "lane_swimmer" */
  update_lane_swimmer?: Maybe<Lane_Swimmer_Mutation_Response>;
  /** update single row of the table: "lane_swimmer" */
  update_lane_swimmer_by_pk?: Maybe<Lane_Swimmer>;
  /** update data of the table: "meet" */
  update_meet?: Maybe<Meet_Mutation_Response>;
  /** update single row of the table: "meet" */
  update_meet_by_pk?: Maybe<Meet>;
  /** update data of the table: "meet_team" */
  update_meet_team?: Maybe<Meet_Team_Mutation_Response>;
  /** update single row of the table: "meet_team" */
  update_meet_team_by_pk?: Maybe<Meet_Team>;
  /** update data of the table: "swimmer" */
  update_swimmer?: Maybe<Swimmer_Mutation_Response>;
  /** update single row of the table: "swimmer" */
  update_swimmer_by_pk?: Maybe<Swimmer>;
  /** update data of the table: "team" */
  update_team?: Maybe<Team_Mutation_Response>;
  /** update single row of the table: "team" */
  update_team_by_pk?: Maybe<Team>;
};


/** mutation root */
export type Mutation_RootDelete_EventArgs = {
  where: Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Event_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_HeatArgs = {
  where: Heat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Heat_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_LaneArgs = {
  where: Lane_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lane_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Lane_SwimmerArgs = {
  where: Lane_Swimmer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Lane_Swimmer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_MeetArgs = {
  where: Meet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meet_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Meet_TeamArgs = {
  where: Meet_Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Meet_Team_By_PkArgs = {
  meet_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_SwimmerArgs = {
  where: Swimmer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Swimmer_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_TeamArgs = {
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Team_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_EventArgs = {
  objects: Array<Event_Insert_Input>;
  on_conflict?: Maybe<Event_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Event_OneArgs = {
  object: Event_Insert_Input;
  on_conflict?: Maybe<Event_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_HeatArgs = {
  objects: Array<Heat_Insert_Input>;
  on_conflict?: Maybe<Heat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Heat_OneArgs = {
  object: Heat_Insert_Input;
  on_conflict?: Maybe<Heat_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_LaneArgs = {
  objects: Array<Lane_Insert_Input>;
  on_conflict?: Maybe<Lane_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lane_OneArgs = {
  object: Lane_Insert_Input;
  on_conflict?: Maybe<Lane_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lane_SwimmerArgs = {
  objects: Array<Lane_Swimmer_Insert_Input>;
  on_conflict?: Maybe<Lane_Swimmer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Lane_Swimmer_OneArgs = {
  object: Lane_Swimmer_Insert_Input;
  on_conflict?: Maybe<Lane_Swimmer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_MeetArgs = {
  objects: Array<Meet_Insert_Input>;
  on_conflict?: Maybe<Meet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meet_OneArgs = {
  object: Meet_Insert_Input;
  on_conflict?: Maybe<Meet_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meet_TeamArgs = {
  objects: Array<Meet_Team_Insert_Input>;
  on_conflict?: Maybe<Meet_Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Meet_Team_OneArgs = {
  object: Meet_Team_Insert_Input;
  on_conflict?: Maybe<Meet_Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SwimmerArgs = {
  objects: Array<Swimmer_Insert_Input>;
  on_conflict?: Maybe<Swimmer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Swimmer_OneArgs = {
  object: Swimmer_Insert_Input;
  on_conflict?: Maybe<Swimmer_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TeamArgs = {
  objects: Array<Team_Insert_Input>;
  on_conflict?: Maybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Team_OneArgs = {
  object: Team_Insert_Input;
  on_conflict?: Maybe<Team_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_EventArgs = {
  _inc?: Maybe<Event_Inc_Input>;
  _set?: Maybe<Event_Set_Input>;
  where: Event_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Event_By_PkArgs = {
  _inc?: Maybe<Event_Inc_Input>;
  _set?: Maybe<Event_Set_Input>;
  pk_columns: Event_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_HeatArgs = {
  _inc?: Maybe<Heat_Inc_Input>;
  _set?: Maybe<Heat_Set_Input>;
  where: Heat_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Heat_By_PkArgs = {
  _inc?: Maybe<Heat_Inc_Input>;
  _set?: Maybe<Heat_Set_Input>;
  pk_columns: Heat_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_LaneArgs = {
  _inc?: Maybe<Lane_Inc_Input>;
  _set?: Maybe<Lane_Set_Input>;
  where: Lane_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lane_By_PkArgs = {
  _inc?: Maybe<Lane_Inc_Input>;
  _set?: Maybe<Lane_Set_Input>;
  pk_columns: Lane_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Lane_SwimmerArgs = {
  _set?: Maybe<Lane_Swimmer_Set_Input>;
  where: Lane_Swimmer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Lane_Swimmer_By_PkArgs = {
  _set?: Maybe<Lane_Swimmer_Set_Input>;
  pk_columns: Lane_Swimmer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_MeetArgs = {
  _set?: Maybe<Meet_Set_Input>;
  where: Meet_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meet_By_PkArgs = {
  _set?: Maybe<Meet_Set_Input>;
  pk_columns: Meet_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Meet_TeamArgs = {
  _set?: Maybe<Meet_Team_Set_Input>;
  where: Meet_Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Meet_Team_By_PkArgs = {
  _set?: Maybe<Meet_Team_Set_Input>;
  pk_columns: Meet_Team_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SwimmerArgs = {
  _set?: Maybe<Swimmer_Set_Input>;
  where: Swimmer_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Swimmer_By_PkArgs = {
  _set?: Maybe<Swimmer_Set_Input>;
  pk_columns: Swimmer_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TeamArgs = {
  _set?: Maybe<Team_Set_Input>;
  where: Team_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Team_By_PkArgs = {
  _set?: Maybe<Team_Set_Input>;
  pk_columns: Team_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** An array relationship */
  heat: Array<Heat>;
  /** An aggregate relationship */
  heat_aggregate: Heat_Aggregate;
  /** fetch data from the table: "heat" using primary key columns */
  heat_by_pk?: Maybe<Heat>;
  /** fetch data from the table: "lane" */
  lane: Array<Lane>;
  /** fetch aggregated fields from the table: "lane" */
  lane_aggregate: Lane_Aggregate;
  /** fetch data from the table: "lane" using primary key columns */
  lane_by_pk?: Maybe<Lane>;
  /** fetch data from the table: "lane_swimmer" */
  lane_swimmer: Array<Lane_Swimmer>;
  /** fetch aggregated fields from the table: "lane_swimmer" */
  lane_swimmer_aggregate: Lane_Swimmer_Aggregate;
  /** fetch data from the table: "lane_swimmer" using primary key columns */
  lane_swimmer_by_pk?: Maybe<Lane_Swimmer>;
  /** fetch data from the table: "meet" */
  meet: Array<Meet>;
  /** fetch aggregated fields from the table: "meet" */
  meet_aggregate: Meet_Aggregate;
  /** fetch data from the table: "meet" using primary key columns */
  meet_by_pk?: Maybe<Meet>;
  /** fetch data from the table: "meet_team" */
  meet_team: Array<Meet_Team>;
  /** fetch aggregated fields from the table: "meet_team" */
  meet_team_aggregate: Meet_Team_Aggregate;
  /** fetch data from the table: "meet_team" using primary key columns */
  meet_team_by_pk?: Maybe<Meet_Team>;
  /** fetch data from the table: "swimmer" */
  swimmer: Array<Swimmer>;
  /** fetch aggregated fields from the table: "swimmer" */
  swimmer_aggregate: Swimmer_Aggregate;
  /** fetch data from the table: "swimmer" using primary key columns */
  swimmer_by_pk?: Maybe<Swimmer>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
};


export type Query_RootEventArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};


export type Query_RootEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};


export type Query_RootEvent_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootHeatArgs = {
  distinct_on?: Maybe<Array<Heat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Heat_Order_By>>;
  where?: Maybe<Heat_Bool_Exp>;
};


export type Query_RootHeat_AggregateArgs = {
  distinct_on?: Maybe<Array<Heat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Heat_Order_By>>;
  where?: Maybe<Heat_Bool_Exp>;
};


export type Query_RootHeat_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLaneArgs = {
  distinct_on?: Maybe<Array<Lane_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Order_By>>;
  where?: Maybe<Lane_Bool_Exp>;
};


export type Query_RootLane_AggregateArgs = {
  distinct_on?: Maybe<Array<Lane_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Order_By>>;
  where?: Maybe<Lane_Bool_Exp>;
};


export type Query_RootLane_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootLane_SwimmerArgs = {
  distinct_on?: Maybe<Array<Lane_Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Swimmer_Order_By>>;
  where?: Maybe<Lane_Swimmer_Bool_Exp>;
};


export type Query_RootLane_Swimmer_AggregateArgs = {
  distinct_on?: Maybe<Array<Lane_Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Swimmer_Order_By>>;
  where?: Maybe<Lane_Swimmer_Bool_Exp>;
};


export type Query_RootLane_Swimmer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMeetArgs = {
  distinct_on?: Maybe<Array<Meet_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Order_By>>;
  where?: Maybe<Meet_Bool_Exp>;
};


export type Query_RootMeet_AggregateArgs = {
  distinct_on?: Maybe<Array<Meet_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Order_By>>;
  where?: Maybe<Meet_Bool_Exp>;
};


export type Query_RootMeet_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootMeet_TeamArgs = {
  distinct_on?: Maybe<Array<Meet_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Team_Order_By>>;
  where?: Maybe<Meet_Team_Bool_Exp>;
};


export type Query_RootMeet_Team_AggregateArgs = {
  distinct_on?: Maybe<Array<Meet_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Team_Order_By>>;
  where?: Maybe<Meet_Team_Bool_Exp>;
};


export type Query_RootMeet_Team_By_PkArgs = {
  meet_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};


export type Query_RootSwimmerArgs = {
  distinct_on?: Maybe<Array<Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Swimmer_Order_By>>;
  where?: Maybe<Swimmer_Bool_Exp>;
};


export type Query_RootSwimmer_AggregateArgs = {
  distinct_on?: Maybe<Array<Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Swimmer_Order_By>>;
  where?: Maybe<Swimmer_Bool_Exp>;
};


export type Query_RootSwimmer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootTeamArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Query_RootTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Query_RootTeam_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "event" */
  event: Array<Event>;
  /** fetch aggregated fields from the table: "event" */
  event_aggregate: Event_Aggregate;
  /** fetch data from the table: "event" using primary key columns */
  event_by_pk?: Maybe<Event>;
  /** An array relationship */
  heat: Array<Heat>;
  /** An aggregate relationship */
  heat_aggregate: Heat_Aggregate;
  /** fetch data from the table: "heat" using primary key columns */
  heat_by_pk?: Maybe<Heat>;
  /** fetch data from the table: "lane" */
  lane: Array<Lane>;
  /** fetch aggregated fields from the table: "lane" */
  lane_aggregate: Lane_Aggregate;
  /** fetch data from the table: "lane" using primary key columns */
  lane_by_pk?: Maybe<Lane>;
  /** fetch data from the table: "lane_swimmer" */
  lane_swimmer: Array<Lane_Swimmer>;
  /** fetch aggregated fields from the table: "lane_swimmer" */
  lane_swimmer_aggregate: Lane_Swimmer_Aggregate;
  /** fetch data from the table: "lane_swimmer" using primary key columns */
  lane_swimmer_by_pk?: Maybe<Lane_Swimmer>;
  /** fetch data from the table: "meet" */
  meet: Array<Meet>;
  /** fetch aggregated fields from the table: "meet" */
  meet_aggregate: Meet_Aggregate;
  /** fetch data from the table: "meet" using primary key columns */
  meet_by_pk?: Maybe<Meet>;
  /** fetch data from the table: "meet_team" */
  meet_team: Array<Meet_Team>;
  /** fetch aggregated fields from the table: "meet_team" */
  meet_team_aggregate: Meet_Team_Aggregate;
  /** fetch data from the table: "meet_team" using primary key columns */
  meet_team_by_pk?: Maybe<Meet_Team>;
  /** fetch data from the table: "swimmer" */
  swimmer: Array<Swimmer>;
  /** fetch aggregated fields from the table: "swimmer" */
  swimmer_aggregate: Swimmer_Aggregate;
  /** fetch data from the table: "swimmer" using primary key columns */
  swimmer_by_pk?: Maybe<Swimmer>;
  /** fetch data from the table: "team" */
  team: Array<Team>;
  /** fetch aggregated fields from the table: "team" */
  team_aggregate: Team_Aggregate;
  /** fetch data from the table: "team" using primary key columns */
  team_by_pk?: Maybe<Team>;
};


export type Subscription_RootEventArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};


export type Subscription_RootEvent_AggregateArgs = {
  distinct_on?: Maybe<Array<Event_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Event_Order_By>>;
  where?: Maybe<Event_Bool_Exp>;
};


export type Subscription_RootEvent_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootHeatArgs = {
  distinct_on?: Maybe<Array<Heat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Heat_Order_By>>;
  where?: Maybe<Heat_Bool_Exp>;
};


export type Subscription_RootHeat_AggregateArgs = {
  distinct_on?: Maybe<Array<Heat_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Heat_Order_By>>;
  where?: Maybe<Heat_Bool_Exp>;
};


export type Subscription_RootHeat_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLaneArgs = {
  distinct_on?: Maybe<Array<Lane_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Order_By>>;
  where?: Maybe<Lane_Bool_Exp>;
};


export type Subscription_RootLane_AggregateArgs = {
  distinct_on?: Maybe<Array<Lane_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Order_By>>;
  where?: Maybe<Lane_Bool_Exp>;
};


export type Subscription_RootLane_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootLane_SwimmerArgs = {
  distinct_on?: Maybe<Array<Lane_Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Swimmer_Order_By>>;
  where?: Maybe<Lane_Swimmer_Bool_Exp>;
};


export type Subscription_RootLane_Swimmer_AggregateArgs = {
  distinct_on?: Maybe<Array<Lane_Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Swimmer_Order_By>>;
  where?: Maybe<Lane_Swimmer_Bool_Exp>;
};


export type Subscription_RootLane_Swimmer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeetArgs = {
  distinct_on?: Maybe<Array<Meet_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Order_By>>;
  where?: Maybe<Meet_Bool_Exp>;
};


export type Subscription_RootMeet_AggregateArgs = {
  distinct_on?: Maybe<Array<Meet_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Order_By>>;
  where?: Maybe<Meet_Bool_Exp>;
};


export type Subscription_RootMeet_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootMeet_TeamArgs = {
  distinct_on?: Maybe<Array<Meet_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Team_Order_By>>;
  where?: Maybe<Meet_Team_Bool_Exp>;
};


export type Subscription_RootMeet_Team_AggregateArgs = {
  distinct_on?: Maybe<Array<Meet_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Team_Order_By>>;
  where?: Maybe<Meet_Team_Bool_Exp>;
};


export type Subscription_RootMeet_Team_By_PkArgs = {
  meet_id: Scalars['uuid'];
  team_id: Scalars['uuid'];
};


export type Subscription_RootSwimmerArgs = {
  distinct_on?: Maybe<Array<Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Swimmer_Order_By>>;
  where?: Maybe<Swimmer_Bool_Exp>;
};


export type Subscription_RootSwimmer_AggregateArgs = {
  distinct_on?: Maybe<Array<Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Swimmer_Order_By>>;
  where?: Maybe<Swimmer_Bool_Exp>;
};


export type Subscription_RootSwimmer_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootTeamArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_AggregateArgs = {
  distinct_on?: Maybe<Array<Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Team_Order_By>>;
  where?: Maybe<Team_Bool_Exp>;
};


export type Subscription_RootTeam_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "swimmer" */
export type Swimmer = {
  __typename?: 'swimmer';
  birthday: Scalars['timestamptz'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  swimmer_lanes: Array<Lane_Swimmer>;
  /** An aggregate relationship */
  swimmer_lanes_aggregate: Lane_Swimmer_Aggregate;
  /** An object relationship */
  team: Team;
  team_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "swimmer" */
export type SwimmerSwimmer_LanesArgs = {
  distinct_on?: Maybe<Array<Lane_Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Swimmer_Order_By>>;
  where?: Maybe<Lane_Swimmer_Bool_Exp>;
};


/** columns and relationships of "swimmer" */
export type SwimmerSwimmer_Lanes_AggregateArgs = {
  distinct_on?: Maybe<Array<Lane_Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Lane_Swimmer_Order_By>>;
  where?: Maybe<Lane_Swimmer_Bool_Exp>;
};

/** aggregated selection of "swimmer" */
export type Swimmer_Aggregate = {
  __typename?: 'swimmer_aggregate';
  aggregate?: Maybe<Swimmer_Aggregate_Fields>;
  nodes: Array<Swimmer>;
};

/** aggregate fields of "swimmer" */
export type Swimmer_Aggregate_Fields = {
  __typename?: 'swimmer_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Swimmer_Max_Fields>;
  min?: Maybe<Swimmer_Min_Fields>;
};


/** aggregate fields of "swimmer" */
export type Swimmer_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Swimmer_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "swimmer" */
export type Swimmer_Aggregate_Order_By = {
  count?: Maybe<Order_By>;
  max?: Maybe<Swimmer_Max_Order_By>;
  min?: Maybe<Swimmer_Min_Order_By>;
};

/** input type for inserting array relation for remote table "swimmer" */
export type Swimmer_Arr_Rel_Insert_Input = {
  data: Array<Swimmer_Insert_Input>;
  /** on conflict condition */
  on_conflict?: Maybe<Swimmer_On_Conflict>;
};

/** Boolean expression to filter rows from the table "swimmer". All fields are combined with a logical 'AND'. */
export type Swimmer_Bool_Exp = {
  _and?: Maybe<Array<Swimmer_Bool_Exp>>;
  _not?: Maybe<Swimmer_Bool_Exp>;
  _or?: Maybe<Array<Swimmer_Bool_Exp>>;
  birthday?: Maybe<Timestamptz_Comparison_Exp>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  swimmer_lanes?: Maybe<Lane_Swimmer_Bool_Exp>;
  team?: Maybe<Team_Bool_Exp>;
  team_id?: Maybe<Uuid_Comparison_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "swimmer" */
export enum Swimmer_Constraint {
  /** unique or primary key constraint */
  SwimmerPkey = 'swimmer_pkey'
}

/** input type for inserting data into table "swimmer" */
export type Swimmer_Insert_Input = {
  birthday?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  swimmer_lanes?: Maybe<Lane_Swimmer_Arr_Rel_Insert_Input>;
  team?: Maybe<Team_Obj_Rel_Insert_Input>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Swimmer_Max_Fields = {
  __typename?: 'swimmer_max_fields';
  birthday?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "swimmer" */
export type Swimmer_Max_Order_By = {
  birthday?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** aggregate min on columns */
export type Swimmer_Min_Fields = {
  __typename?: 'swimmer_min_fields';
  birthday?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "swimmer" */
export type Swimmer_Min_Order_By = {
  birthday?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** response of any mutation on the table "swimmer" */
export type Swimmer_Mutation_Response = {
  __typename?: 'swimmer_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Swimmer>;
};

/** input type for inserting object relation for remote table "swimmer" */
export type Swimmer_Obj_Rel_Insert_Input = {
  data: Swimmer_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Swimmer_On_Conflict>;
};

/** on conflict condition type for table "swimmer" */
export type Swimmer_On_Conflict = {
  constraint: Swimmer_Constraint;
  update_columns?: Array<Swimmer_Update_Column>;
  where?: Maybe<Swimmer_Bool_Exp>;
};

/** Ordering options when selecting data from "swimmer". */
export type Swimmer_Order_By = {
  birthday?: Maybe<Order_By>;
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  swimmer_lanes_aggregate?: Maybe<Lane_Swimmer_Aggregate_Order_By>;
  team?: Maybe<Team_Order_By>;
  team_id?: Maybe<Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: swimmer */
export type Swimmer_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "swimmer" */
export enum Swimmer_Select_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "swimmer" */
export type Swimmer_Set_Input = {
  birthday?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  team_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "swimmer" */
export enum Swimmer_Update_Column {
  /** column name */
  Birthday = 'birthday',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  TeamId = 'team_id',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "team" */
export type Team = {
  __typename?: 'team';
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  name: Scalars['String'];
  /** An array relationship */
  swimmers: Array<Swimmer>;
  /** An aggregate relationship */
  swimmers_aggregate: Swimmer_Aggregate;
  /** An array relationship */
  team_meets: Array<Meet_Team>;
  /** An aggregate relationship */
  team_meets_aggregate: Meet_Team_Aggregate;
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "team" */
export type TeamSwimmersArgs = {
  distinct_on?: Maybe<Array<Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Swimmer_Order_By>>;
  where?: Maybe<Swimmer_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamSwimmers_AggregateArgs = {
  distinct_on?: Maybe<Array<Swimmer_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Swimmer_Order_By>>;
  where?: Maybe<Swimmer_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamTeam_MeetsArgs = {
  distinct_on?: Maybe<Array<Meet_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Team_Order_By>>;
  where?: Maybe<Meet_Team_Bool_Exp>;
};


/** columns and relationships of "team" */
export type TeamTeam_Meets_AggregateArgs = {
  distinct_on?: Maybe<Array<Meet_Team_Select_Column>>;
  limit?: Maybe<Scalars['Int']>;
  offset?: Maybe<Scalars['Int']>;
  order_by?: Maybe<Array<Meet_Team_Order_By>>;
  where?: Maybe<Meet_Team_Bool_Exp>;
};

/** aggregated selection of "team" */
export type Team_Aggregate = {
  __typename?: 'team_aggregate';
  aggregate?: Maybe<Team_Aggregate_Fields>;
  nodes: Array<Team>;
};

/** aggregate fields of "team" */
export type Team_Aggregate_Fields = {
  __typename?: 'team_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Team_Max_Fields>;
  min?: Maybe<Team_Min_Fields>;
};


/** aggregate fields of "team" */
export type Team_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Team_Select_Column>>;
  distinct?: Maybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "team". All fields are combined with a logical 'AND'. */
export type Team_Bool_Exp = {
  _and?: Maybe<Array<Team_Bool_Exp>>;
  _not?: Maybe<Team_Bool_Exp>;
  _or?: Maybe<Array<Team_Bool_Exp>>;
  created_at?: Maybe<Timestamptz_Comparison_Exp>;
  id?: Maybe<Uuid_Comparison_Exp>;
  name?: Maybe<String_Comparison_Exp>;
  swimmers?: Maybe<Swimmer_Bool_Exp>;
  team_meets?: Maybe<Meet_Team_Bool_Exp>;
  updated_at?: Maybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "team" */
export enum Team_Constraint {
  /** unique or primary key constraint */
  TeamPkey = 'team_pkey'
}

/** input type for inserting data into table "team" */
export type Team_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  swimmers?: Maybe<Swimmer_Arr_Rel_Insert_Input>;
  team_meets?: Maybe<Meet_Team_Arr_Rel_Insert_Input>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Team_Max_Fields = {
  __typename?: 'team_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Team_Min_Fields = {
  __typename?: 'team_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "team" */
export type Team_Mutation_Response = {
  __typename?: 'team_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Team>;
};

/** input type for inserting object relation for remote table "team" */
export type Team_Obj_Rel_Insert_Input = {
  data: Team_Insert_Input;
  /** on conflict condition */
  on_conflict?: Maybe<Team_On_Conflict>;
};

/** on conflict condition type for table "team" */
export type Team_On_Conflict = {
  constraint: Team_Constraint;
  update_columns?: Array<Team_Update_Column>;
  where?: Maybe<Team_Bool_Exp>;
};

/** Ordering options when selecting data from "team". */
export type Team_Order_By = {
  created_at?: Maybe<Order_By>;
  id?: Maybe<Order_By>;
  name?: Maybe<Order_By>;
  swimmers_aggregate?: Maybe<Swimmer_Aggregate_Order_By>;
  team_meets_aggregate?: Maybe<Meet_Team_Aggregate_Order_By>;
  updated_at?: Maybe<Order_By>;
};

/** primary key columns input for table: team */
export type Team_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "team" */
export enum Team_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "team" */
export type Team_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** update columns of table "team" */
export enum Team_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  UpdatedAt = 'updated_at'
}


/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>;
  _gt?: Maybe<Scalars['timestamptz']>;
  _gte?: Maybe<Scalars['timestamptz']>;
  _in?: Maybe<Array<Scalars['timestamptz']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['timestamptz']>;
  _lte?: Maybe<Scalars['timestamptz']>;
  _neq?: Maybe<Scalars['timestamptz']>;
  _nin?: Maybe<Array<Scalars['timestamptz']>>;
};


/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>;
  _gt?: Maybe<Scalars['uuid']>;
  _gte?: Maybe<Scalars['uuid']>;
  _in?: Maybe<Array<Scalars['uuid']>>;
  _is_null?: Maybe<Scalars['Boolean']>;
  _lt?: Maybe<Scalars['uuid']>;
  _lte?: Maybe<Scalars['uuid']>;
  _neq?: Maybe<Scalars['uuid']>;
  _nin?: Maybe<Array<Scalars['uuid']>>;
};

export type GetMeetInfoQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetMeetInfoQuery = (
  { __typename?: 'query_root' }
  & { meet_by_pk?: Maybe<(
    { __typename?: 'meet' }
    & Pick<Meet, 'id'>
    & { meet_teams: Array<(
      { __typename?: 'meet_team' }
      & { team: (
        { __typename?: 'team' }
        & Pick<Team, 'name'>
      ) }
    )> }
  )>, available_lanes: (
    { __typename?: 'lane_aggregate' }
    & { nodes: Array<(
      { __typename?: 'lane' }
      & Pick<Lane, 'number'>
    )> }
  ) }
);


export const GetMeetInfoDocument = gql`
    query getMeetInfo($id: uuid!) {
  meet_by_pk(id: $id) {
    id
    meet_teams {
      team {
        name
      }
    }
  }
  available_lanes: lane_aggregate(
    where: {heat: {event: {meet_id: {_eq: $id}}}}
    distinct_on: [number]
  ) {
    nodes {
      number
    }
  }
}
    `;

/**
 * __useGetMeetInfoQuery__
 *
 * To run a query within a React component, call `useGetMeetInfoQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMeetInfoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMeetInfoQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetMeetInfoQuery(baseOptions: Apollo.QueryHookOptions<GetMeetInfoQuery, GetMeetInfoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMeetInfoQuery, GetMeetInfoQueryVariables>(GetMeetInfoDocument, options);
      }
export function useGetMeetInfoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMeetInfoQuery, GetMeetInfoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMeetInfoQuery, GetMeetInfoQueryVariables>(GetMeetInfoDocument, options);
        }
export type GetMeetInfoQueryHookResult = ReturnType<typeof useGetMeetInfoQuery>;
export type GetMeetInfoLazyQueryHookResult = ReturnType<typeof useGetMeetInfoLazyQuery>;
export type GetMeetInfoQueryResult = Apollo.QueryResult<GetMeetInfoQuery, GetMeetInfoQueryVariables>;