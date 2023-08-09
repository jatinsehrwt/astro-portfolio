import theme from "@/data/theme";
import { MAP_COLOR_VARIANT_TO_TEXT } from "./mapVariants";

export default function convertUnderscoreToItalicTag(str: string) {
    return str.replace(
        /\_{1,2}(.*?)\_{1,2}/g,
        `<em class="font-normal ${MAP_COLOR_VARIANT_TO_TEXT[theme.colors.secondary]
        }">$1</em>`
    );
};