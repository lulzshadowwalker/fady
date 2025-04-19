import localFont from 'next/font/local'

export const tido = localFont({
    src: [
        {
            path: './tido-bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: './tido-light.otf',
            weight: '300',
            style: 'normal',
        },
        {
            path: './tido-regular.otf',
            weight: '400',
            style: 'normal',
        },
    ],
})
