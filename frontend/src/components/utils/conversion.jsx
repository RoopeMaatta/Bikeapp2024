import { StyledNumber, StyledUnit } from './styledComponents';

// formats and converts units into a more userfrinfly format

export function formatDistance(distanceInMeters) {
  if (distanceInMeters < 1000) {
    return <><StyledNumber>{distanceInMeters}</StyledNumber> <StyledUnit>m</StyledUnit></>;
  } else {
    const distanceInKilometers = (distanceInMeters / 1000).toFixed(1);
    return <><StyledNumber>{distanceInKilometers}</StyledNumber> <StyledUnit>km</StyledUnit></>;
  }
}

export function formatDuration(durationInSeconds) {
  const minutes = Math.floor(durationInSeconds / 60) % 60;
  const hours = Math.floor(durationInSeconds / 3600) % 24;
  const days = Math.floor(durationInSeconds / (3600 * 24));

  return (
    <>
      {days > 0 && <><StyledNumber>{days}</StyledNumber> <StyledUnit>d</StyledUnit> </>}
      {(hours > 0 || days > 0) && <><StyledNumber>{hours}</StyledNumber> <StyledUnit>h</StyledUnit> </>}
      <StyledNumber>{minutes}</StyledNumber> <StyledUnit>m</StyledUnit>
    </>
  );
}
