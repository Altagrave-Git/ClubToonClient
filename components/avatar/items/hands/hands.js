import { Path, G } from "react-native-svg";

const handsTypeA = {
  Bare: {
    obj: (colors) => (
      <></>
    ),
    M: true,
    F: true,
    scheme: 0,
    type: 'Hands',
    subtype: 'hands'
  },
  Gloves: {
    obj: (colors) => (
      <G>
        <G>
          <Path fill={colors[0]} d="M 271.63477 269.91016 C 267.34443 270.21904 259.82432 273.30403 253.48828 278.00391 C 254.08402 282.01655 254.4981 285.09361 255.00977 289.47852 C 255.01075 289.48452 255.01063 289.49029 255.01172 289.49609 C 255.41231 292.64996 255.72539 295.17048 256.01172 298.02734 C 257.68698 298.29044 259.02777 298.04235 260.44531 297.93945 C 260.44831 297.93923 260.45108 297.9385 260.45508 297.9375 C 260.46208 297.9365 260.46946 297.93672 260.47656 297.93555 C 260.49996 297.93155 260.52348 297.92978 260.54688 297.92578 C 260.55487 297.92478 260.56387 297.92388 260.57227 297.92188 C 260.57727 297.92088 260.58259 297.91897 260.58789 297.91797 C 260.68439 297.90307 260.78073 297.88584 260.87695 297.86914 C 260.88495 297.86814 260.89394 297.86723 260.90234 297.86523 C 261.02754 297.84303 261.1526 297.82207 261.27734 297.79688 C 261.28634 297.79487 261.29423 297.79302 261.30273 297.79102 C 261.32093 297.78702 261.33902 297.783 261.35742 297.7793 C 261.4657 297.7572 261.57375 297.73143 261.68164 297.70703 C 261.76874 297.68713 261.8565 297.66984 261.94336 297.64844 C 261.95376 297.64544 261.96421 297.64167 261.97461 297.63867 C 262.15851 297.59347 262.34083 297.54407 262.52344 297.49219 C 262.53044 297.49019 262.53647 297.48833 262.54297 297.48633 C 262.78177 297.41743 263.01951 297.34226 263.25586 297.26172 C 263.38404 297.21842 263.51324 297.17762 263.64062 297.13086 C 263.95272 297.01541 264.26139 296.88835 264.56836 296.75195 C 264.64136 296.71965 264.71438 296.6879 264.78711 296.6543 C 264.79111 296.6523 264.79513 296.65239 264.79883 296.65039 C 265.17011 296.47824 265.53791 296.29163 265.90039 296.08789 C 266.87107 295.54231 267.76831 295.0379 268.60742 294.53516 C 268.67752 294.49316 268.75119 294.45015 268.82031 294.4082 C 269.67173 293.89179
          270.45003 293.37795 271.14258 292.83594 C 271.16688 292.81694 271.19074 292.7983 271.21484 292.7793 C 271.55315 292.51124 271.87366 292.23611 272.16992 291.94922 C 272.48012 291.64883 272.76571 291.33583 273.02734 291.00586 C 273.28314 290.68326 273.51371 290.3439 273.7207 289.98438 C 273.7257 289.97638 273.73163 289.96904 273.73633 289.96094 L 273.73633 289.95898 C 273.73933 289.95298 273.74209 289.94721 273.74609 289.94141 C 273.95224 289.5782 274.13476 289.1947 274.28906 288.78516 C 274.4446 288.37232 274.57146 287.93361 274.67188 287.46484 C 274.67275 287.46084 274.67478 287.45683 274.67578 287.45312 L 274.67578 287.45117 C 274.67632 287.44817 274.67673 287.44636 274.67773 287.44336 C 274.77713 286.9743 274.8487 286.47527 274.89062 285.94141 C 274.89078 285.93941 274.89049 285.93755 274.89062 285.93555 L 274.89062 285.93359 L 274.89062 285.93164 C 274.93252 285.39304 274.94478 284.81863 274.92578 284.20508 C 274.90678 283.59015 274.85618 282.93567 274.77344 282.23633 L 274.77344 282.23438 C 274.69074 281.53555 274.57661 280.79221 274.42773 280 C 274.27874 279.20712 274.09471 278.36626 273.87695 277.4707 L 273.87695 277.46875 C 273.67239 276.62759 273.43144 275.72861 273.16406 274.78906 C 273.12786 274.66204 273.09206 274.53319 273.05469 274.4043 C 272.78034 273.45662 272.47938 272.46937 272.14062 271.41602 C 271.6866 269.9386 272.17723 271.28522 271.63477 269.91016 z M 129.96875 270.45898 C 128.99273 270.48618 128.32763 270.76077 128.125 271.36133 C 122.3193 289.41461 126.12294 291.4005 134.36523 296.0332 C 137.43113 297.75643 140.83174 298.33334 144.23047 297.95508 C 144.77563 292.42077 145.44158 288.40311 146.47656 283.67188 C 146.88313 281.68903 147.31677 279.69368 147.78516 277.68359 C 144.14062 274.81943 134.17241 270.34164 129.96875 270.45898 z " />
          <Path fill="#00000018" d="M 129.96875 270.45898 C 128.99273 270.48618 128.32763 270.76077 128.125 271.36133 C 127.96241 271.86691 127.8099 272.3553 127.66602 272.83008 C 127.23436 274.25442 126.8807 275.55112 126.56836 276.78516 C 126.48166 277.12761 126.39137 277.47524 126.31445 277.80273 C 125.95401 279.33658 125.68799 280.73129 125.5332 281.9668 C 125.4365 282.73866 125.3606 283.4795 125.33984 284.15039 C 125.31804 284.85414 125.34785 285.49164 125.40625 286.09766 C 125.42475 286.29066 125.45807 286.46638 125.48438 286.65039 C 125.54167 287.05037 125.61164 287.43608 125.70508 287.79688 C 125.75318 287.98262 125.80585 288.16357 125.86328 288.33984 C 125.97696 288.68891 126.11244 289.01845 126.26172 289.33398 C 126.32532 289.4685 126.38123 289.6112 126.45117 289.74023 C 126.68307 290.16829 126.93955 290.57445 127.23828 290.95117 C 127.3691 291.11615 127.50532 291.27658 127.64844 291.43359 C 127.79144 291.59057 127.94076 291.74244 128.0957 291.89258 C 128.1768 291.97118 128.26338 292.04808 128.34766 292.125 C 128.42446 292.1951 128.49867 292.26705 128.57812 292.33594 C 128.74524 292.48077 128.91719 292.62144 129.0957 292.76172 C 129.27382 292.90168 129.45731 293.03921 129.64648 293.17578 C 129.64648 293.17578 129.64844 293.17773 129.64844 293.17773 C 130.21537 293.58689 130.83176 293.98359 131.49219 294.38281 C 132.37388 294.91579 133.33495 295.45216 134.36523 296.03125 C 134.38783 296.04555 134.42006 296.06177 134.44336 296.07617 C 137.36284 297.69559 140.58244 298.27888 143.8125 297.99414 C 143.93434 297.97934 144.05591 297.96967 144.17773 297.95117
          C 129.22347 293.13404 128.06736 282.53525 130.35938 270.46094 C 130.22437 270.45694 130.09386 270.45598 129.96875 270.45898 z M 256.90625 275.69141 C 255.75414 276.40503 254.61564 277.17046 253.51172 277.98828 C 253.61519 278.63297 253.64376 278.96369 253.72461 279.63086 C 253.72638 279.64305 253.72675 279.65579 253.72852 279.66797 C 253.99424 281.50128 254.23352 283.24328 254.46484 285.04492 C 254.54342 285.65695 254.6256 286.28589 254.70508 286.93359 C 254.80717 287.75785 254.90793 288.60219 255.00977 289.47852 C 255.01075 289.48452 255.01063 289.49029 255.01172 289.49609 C 255.01572 289.52719 255.01974 289.55308 255.02344 289.58398 C 255.41356 292.66408 255.74351 295.22925 256.02539 298.0293 C 256.06148 298.03491 256.09508 298.03782 256.13086 298.04297 C 256.30162 298.06752 256.47043 298.08874 256.63477 298.10352 C 257.03094 298.13913 257.4096 298.14959 257.77734 298.14258 C 257.77863 298.14255 257.77997 298.1426 257.78125 298.14258 C 257.96655 298.13895 258.14765 298.13171 258.32812 298.12109 C 258.68177 298.1003 259.0288 298.06816 259.37305 298.03516 C 259.72808 298.0012 260.08136 297.96555 260.43945 297.93945 C 260.44071 297.93927 260.4421 297.93964 260.44336 297.93945 L 260.44531 297.93945 C 260.44831 297.93898 260.45108 297.93855 260.45508 297.9375 C 260.46208 297.9365 260.46946 297.93672 260.47656 297.93555 C 260.49996 297.93155 260.52348 297.92978 260.54688 297.92578 C 260.55487 297.92478 260.56387 297.92388 260.57227 297.92188 C 260.57727 297.92088 260.58259 297.91897 260.58789 297.91797 C 260.68439 297.90307 260.78073 297.88584 260.87695 297.86914 C 260.88065 297.86868 260.8847 297.86775 260.88867 297.86719 C 260.89367 297.86639 260.89764 297.86623 260.90234 297.86523 C 261.02754 297.84303 261.1526 297.82206 261.27734 297.79688 C 261.28634 297.79487 261.29423 297.79302 261.30273 297.79102 C 261.32093 297.78702 261.33902 297.783 261.35742 297.7793 C 260.27232 290.69302 259.08139 283.24654 256.90625 275.69141 z " />
        </G>
      </G>
    ),
    M: true,
    F: true,
    scheme: 1,
    type: 'Hands',
    subtype: 'hands'
  },
}

export default handsTypeA;
