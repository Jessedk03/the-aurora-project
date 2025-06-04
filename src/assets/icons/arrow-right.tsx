type ArrowRightProps = {
    size: number,
    hexColor?: string,
}

function ArrowRight({ size, hexColor }: ArrowRightProps) {
    return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 7L15 12L10 17" stroke={hexColor ?? "currentColor"} stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"/>
        </svg>
    )
}

export default ArrowRight;