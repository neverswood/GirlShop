function CareScale({ scaleValue, careType }) {
  //  const scaleValue = props.scaleValue;
  const range = [1, 2, 3];
  const scaleType = careType === 'light' ? '☀️' : '💧';
  return (
    <div>
      {range.map((rangeElement) =>
        scaleValue >= rangeElement ? (
          <span key={rangeElement.toString()}>{scaleType}</span>
        ) : null
      )}
    </div>
  );
}

export default CareScale;
