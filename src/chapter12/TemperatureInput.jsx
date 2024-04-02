const scaleNames = {
  c: '섭씨',
  f: '화씨',
};

function TemperatureInput(props) {
    const onChange = (e) => {
        props.onTemperatureChange(e.target.value);
    }

    return (
        <fieldset>
            <legend>온도를 입력하세요(단위:{scaleNames[props.scale]}):</legend>
            <input value={props.temperature} onChange={onChange} />
        </fieldset>
    );

}

export default TemperatureInput;