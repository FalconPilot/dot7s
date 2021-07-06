import { effectsCreator } from '$front/common/utils'
import { AppAction, AppActionType, AppState } from '$front/admin/store/types'

export default effectsCreator<AppState, AppActionType, AppAction>()
