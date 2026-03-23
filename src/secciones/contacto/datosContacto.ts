import { Instagram, Mail, MapPin, Phone } from 'lucide-react'

import type { ContactoItem } from '@/interfaces/contacto'

export const contactoItems: ContactoItem[] = [
  {
    id: 'address',
    valor: 'Av. Educación 123, Col. Centro, Ciudad',
    Icono: MapPin,
    colorClass: 'text-iex-primary bg-iex-light',
  },
  {
    id: 'phone',
    valor: '+52 (55) 1234 5678',
    href: 'tel:+525512345678',
    Icono: Phone,
    colorClass: 'text-sky-600 bg-sky-50',
  },
  {
    id: 'email',
    valor: 'admisiones@iex.edu.mx',
    href: 'mailto:admisiones@iex.edu.mx',
    Icono: Mail,
    colorClass: 'text-iex-success bg-emerald-50',
  },
  {
    id: 'social',
    valor: '@institutoiex',
    Icono: Instagram,
    colorClass: 'text-iex-purple bg-violet-50',
  },
]

export const urlMapaPorDefecto =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.595018913151!2d-99.13449182402655!3d19.432644343944766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff35f5bd4633%3A0x7421a9140406e68!2sZ%C3%B3calo%2C%20Centro%20Hist%C3%B3rico%20de%20la%20Ciudad%20de%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1710000000000!5m2!1ses!2smx'
