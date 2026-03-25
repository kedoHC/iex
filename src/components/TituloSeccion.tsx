import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";
import type { TituloSeccionProps } from "@/interfaces/componentes";

export function TituloSeccion({
  titulo,
  subtitulo,
  mostrarSubrayado = true,
  className,
  idTitulo,
}: TituloSeccionProps) {
  return (
    <Reveal className={cn("mx-auto max-w-3xl text-center", className)}>
      <h2
        id={idTitulo}
        className="text-3xl font-bold tracking-tight text-iex-navy md:text-4xl"
      >
        {titulo}
      </h2>
      {mostrarSubrayado ? (
        <div
          className="mx-auto mt-3 h-1 w-16 rounded-full bg-iex-accent"
          aria-hidden
        />
      ) : null}
      {subtitulo ? (
        <p className="mt-4 text-base text-muted-foreground md:text-lg">
          {subtitulo}
        </p>
      ) : null}
    </Reveal>
  );
}
