import OutlinedButton from "../UI/OutlinedButton";

const LocationPicker = () => {
  function getLocationHandler() {}
  function pickOnMapHandler() {}

  return (
    <View>
      <View></View>
      <View>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="image" onPress={pickOnMapHandler}>
          Pick On Map
        </OutlinedButton>
      </View>
    </View>
  );
};

export default LocationPicker;
