import { ProjectGroup } from '../types';

export interface State {
    projectGroups: ProjectGroup[]
}

export const intialAppState = {
    projectGroups: []
};