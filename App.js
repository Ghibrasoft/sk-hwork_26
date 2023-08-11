import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import contacts from "./data/contacts.json";
import { useEffect, useState } from "react";
import ItemRow from "./components/ItemRow";

export default function App() {
  const [contactsData, setContactsData] = useState([]);
  const [searchWord, setSearchWord] = useState("");
  const [inputFocused, setInputFocused] = useState(false);

  const renderItem = ({ item }) => (
    <ItemRow name={item.name} surname={item.surname} phone={item.phone} />
  );

  useEffect(() => {
    setContactsData(
      contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(searchWord.toLowerCase()) ||
          contact.surname.toLowerCase().includes(searchWord.toLowerCase()) ||
          contact.phone.includes(searchWord)
      )
    );
  }, [searchWord]);

  return (
    <SafeAreaView>
      <StatusBar barStyle="default" />
      <View style={styles.searchForm}>
        <TextInput
          style={[
            styles.searchInput,
            { borderColor: inputFocused ? "#10b981" : "#ccc" },
          ]}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          value={searchWord}
          onChangeText={(text) => setSearchWord(text)}
          placeholder="Find contact..."
        />
      </View>
      <FlatList
        style={styles.contactsContent}
        data={contactsData}
        keyExtractor={(contact) => contact.id.toString()}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchForm: {
    padding: 20,
    paddingTop: StatusBar.currentHeight + 20,
  },
  searchInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  contactsContent: {
    padding: 20,
  },
  contactItem: {
    flex: 0.5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
});
