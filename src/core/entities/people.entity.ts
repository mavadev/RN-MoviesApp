import {Media} from './media.entity';

export interface PeoplePopular {
  page?: number;
  persons: Person[];
  totalPages?: number;
}

export interface Person {
  id: number;
  name: string;
  avatar: string;
  trajectory: Media[];
  workDepartment: string;
}
