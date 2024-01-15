
const SectionTitle = (props) => {
    const style = {
        fontSize: props.size,
        color:props.color
    }
    return(
        <span style={style}>
            {props.title}
        </span>
    );
}

export default SectionTitle;