import { StyleSheet, Text, View } from "react-native";

const ItemRow = ({ name, surname, phone }) => {
  return (
    <View style={styles.contactItem}>
      <Text style={styles.fullName}>{`${name} ${surname}`}</Text>
      <Text style={styles.phone}>+(995)-{phone}</Text>
    </View>
  );
};

export default ItemRow;

const styles = StyleSheet.create({
  contactItem: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#3b82f6",
    padding: 20,
    marginVertical: 5,
  },
  fullName: {
    fontSize: 17,
  },
  phone: {
    fontSize: 15,
  },
});
