import { create } from 'zustand'

type SchoolStats = {
  students: number
  teachers: number
  courses: number
}

type SchoolState = {
  stats: SchoolStats
  incrementStudents: () => void
}

export const useSchoolStore = create<SchoolState>((set) => ({
  stats: {
    students: 420,
    teachers: 32,
    courses: 18,
  },
  incrementStudents: () =>
    set((state) => ({
      stats: {
        ...state.stats,
        students: state.stats.students + 1,
      },
    })),
}))
