# Brief para Codex: Hub Mundial 2026 Ecuador

Objetivo: mantener una página SEO simple y segura sobre dónde ver el Mundial 2026 en Ecuador, sin enlaces a transmisiones no autorizadas.

## Página principal

Ruta publicada:

```txt
/mundial-2026-ecuador/
```

Archivo:

```txt
mundial-2026-ecuador/index.html
```

## Fuente de datos editorial

Archivo:

```txt
data/mundial-2026-ecuador.json
```

Usar este JSON como referencia interna para actualizar:

- canales oficiales;
- partidos de Ecuador;
- notas de disponibilidad;
- fuentes revisadas;
- reglas editoriales.

## Reglas editoriales

1. No agregar enlaces a streams no autorizados.
2. No mencionar sitios piratas por nombre.
3. No prometer que un partido se transmite si no hay fuente oficial.
4. Priorizar búsquedas de intención local: Ecuador, hora Ecuador, canal Ecuador, Teleamazonas, DSports, DGO, DAZN.
5. Actualizar siempre la fecha `Actualizado:` en el HTML cuando cambie el contenido.
6. Mantener la respuesta principal arriba: canal, hora y opciones disponibles.

## Tareas recomendadas para próximos commits

- Crear una página por partido de Ecuador:
  - `/ecuador-vs-curazao-donde-ver/`
  - `/ecuador-vs-alemania-donde-ver/`
- Agregar un bloque `Partidos de hoy` si se confirma la programación diaria.
- Agregar Google AdSense cuando la cuenta esté aprobada.
- Agregar Google Analytics o Plausible.
- Enviar `sitemap.xml` a Google Search Console.
- Revisar cada día fuentes oficiales antes de actualizar horarios.

## SEO sugerido

Títulos de páginas por partido:

```txt
Ecuador vs Curazao: dónde ver, horario y canal en Ecuador
Ecuador vs Alemania: dónde ver, horario y canal en Ecuador
```

Meta descriptions:

```txt
Conoce dónde ver Ecuador vs Curazao por el Mundial 2026 en Ecuador: horario local, canal de TV, streaming oficial y opciones disponibles.
```

## AdSense

No insertar anuncios hasta tener el `publisher id` real. Cuando esté aprobado, colocar el script oficial de AdSense en el `<head>` y reemplazar los bloques `.ad-placeholder` por unidades de anuncio válidas.
