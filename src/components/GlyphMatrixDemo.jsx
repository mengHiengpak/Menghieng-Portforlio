import { GlyphMatrix } from "@/registry/magicui/glyph-matrix"

export function GlyphMatrixDemo() {
    return (
        <GlyphMatrix
            glyphs="01·•+*/\<>="
            cellSize={14}
            mutationRate={0.04}
            interval={90}
            fadeBottom={0.6}
            color="#ffffff"
        />
    )
}
