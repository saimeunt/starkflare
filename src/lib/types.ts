export interface UserStats {
  uniqueUsersLast7Days: number
  newUsersLast7Days: number
  lostUsersLast7Days: number
}

export interface TransactionStats {
  transactionsCountLast7Days: number[]
  stepsNumberLast7Days: number[]
}

export interface CommonStats {
  userStats: UserStats
  transactionStats: TransactionStats
}

export interface RawEntrypoint {
  entrypointSelector: string
  entrypointSteps: number
  entrypointStepsPercentage: number
}

export interface RawEntrypoints {
  entrypoints: RawEntrypoint[]
}

export interface Entrypoint extends RawEntrypoint {
  entrypoint: string
}

export interface Entrypoints {
  entrypoints: Entrypoint[]
}
