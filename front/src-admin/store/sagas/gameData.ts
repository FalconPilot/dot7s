import effects from '$front/admin/utils/saga'
import { actions } from '$front/admin/store/actions'
import { getWeapons } from '$front/common/api'

function * loadWeapons () {
  const weapons = yield * effects.call(getWeapons)
  yield effects.put(actions.gameData.weapons.loadingSuccess(weapons))
}

export default function * gameDataSagas () {
  yield effects.all([
    effects.takeEvery(['GAMEDATA/WEAPONS/LOADING_START'], loadWeapons)
  ])
}
