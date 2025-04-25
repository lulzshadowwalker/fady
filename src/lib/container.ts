import 'reflect-metadata'

import { container } from 'tsyringe'
import { StatsRepository } from './contract/stats-repository'
import { FirebaseStatsRepository } from './repository/firebase-stats-repository'

const STATS_REPOSITORY = 'STATS_REPOSITORY'

container.register<StatsRepository>(STATS_REPOSITORY, {
    useClass: FirebaseStatsRepository,
})

export const statsRepository = () =>
    container.resolve<StatsRepository>(STATS_REPOSITORY)

/**
 * Returns the development or production value based on the current environment.
 *
 * @param dev - The value to use in a development environment.
 * @param prod - The value to use in a production environment.
 * @returns The value corresponding to the current environment.
 */
function either(dev: any, prod: any): any {
    const isDev = process.env.NODE_ENV === 'development'

    return isDev ? dev : prod
}
