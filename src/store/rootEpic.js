import { combineEpics } from 'redux-observable'

import { userEpics } from './user/epics'

export default combineEpics(...userEpics)