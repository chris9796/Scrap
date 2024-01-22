import "./SectionInput.css";
function SectionInput(props) {
    return (
        <input
            onChange={props.onChange}
            type={props.type}
            placeholder={props.name}
            className="SectionInput"
            value={props.value}
        />
    );
}

export default SectionInput;
