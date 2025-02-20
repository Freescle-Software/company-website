const plugins = [
    function ({ addVariant }) {
        addVariant('child', '& > *');
        addVariant('child-hover', '& > *:hover');
    }
]
export default plugins;