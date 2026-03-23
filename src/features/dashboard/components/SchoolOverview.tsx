import { GraduationCap, Users, BookOpen } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { useSchoolStore } from '@/store/useSchoolStore'

export function SchoolOverview() {
  const stats = useSchoolStore((state) => state.stats)
  const incrementStudents = useSchoolStore((state) => state.incrementStudents)

  return (
    <section className="grid gap-4 md:grid-cols-3">
      <Card>
        <CardHeader>
          <CardDescription>Estudiantes</CardDescription>
          <CardTitle className="flex items-center gap-2">
            <Users className="size-5 text-primary" />
            {stats.students}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Button size="sm" onClick={incrementStudents}>
            Registrar nuevo estudiante
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Docentes</CardDescription>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="size-5 text-primary" />
            {stats.teachers}
          </CardTitle>
        </CardHeader>
      </Card>

      <Card>
        <CardHeader>
          <CardDescription>Cursos activos</CardDescription>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="size-5 text-primary" />
            {stats.courses}
          </CardTitle>
        </CardHeader>
      </Card>
    </section>
  )
}
