import config from './config'

const USE_CASES = {
  get_tierlist_use_case: () =>
    import(
      /* webpackChunkName: "get_tierlist_use_case" */
      './tierlist/useCases/GetTierlistUseCase/factory'
    ),
  get_filtered_tierlist_use_case: () =>
    import(
      /* webpackChunkName: "get_filtered_tierlist_use_case" */
      './tierlist/useCases/GetFilteredTierlistUseCase/factory'
    ),
  get_next_game_route_use_case: () =>
    import(
      /* webpackChunkName: "get_next_game_route_use_case" */
      './tierlist/useCases/GetNextGameRouteUseCase/factory'
    ),
  get_setting_use_case: () =>
    import(
      /* webpackChunkName: "get_setting_use_case" */
      './settings/useCases/GetSettingUseCase/factory'
    )
}

const entryPoint = {
  get: key => {
    if (key === 'config') return config
    const useCaseName = key

    return {
      async execute (...params) {
        const { default: useCaseFactory } = await USE_CASES[useCaseName]()
        return useCaseFactory({ config }).execute(...params)
      }
    }
  }
}

export default entryPoint
