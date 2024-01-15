function AsideText(props){

    return(
        <div style={{
            border:"2px solid white",
            textAlign:"center",
            color:"white",
            fontSize:"30px",
            alignItems: "center"
        }}>
        {props.name}
        </div>
    );
}
export default AsideText;
