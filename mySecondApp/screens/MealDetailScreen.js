import { useLayoutEffect } from "react";
import { 
    View, 
    Text, 
    Image, 
    StyleSheet, 
    ScrollView 
} from "react-native";

import IconButton from "../components/IconButton";
import List from "../components/MealDetail/List";
import Subtitle from "../components/MealDetail/Subtitle";
import MealDetails from "../components/MealDetails";
import { MEALS } from "../data/dummy-data";

function MealDetailScreen({route, navigation}) {
    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function headerButtonPressHandler() {
        console.log('Pressed');
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
              return (
                <IconButton 
                  icon= "star" 
                  color={"white"} 
                  onPress={headerButtonPressHandler} 
                />
              );
            }
        });
    }, [navigation, headerButtonPressHandler]);

    return (
      <ScrollView style= {styles.rootContainter}>
        <Image style= {styles.image} source= {{uri: selectedMeal.imageUrl}} />
        <Text style= {styles.title}>{selectedMeal.title}</Text>
        <MealDetails 
          duration={selectedMeal.duration} 
          complexity={selectedMeal.complexity} 
          affordability={selectedMeal.affordability}
          textStyle= {styles.detailText} 
        />
        <View style= {styles.lsitOuterContainer}>
          <View style= {styles.listContainer}>
            <Subtitle>Ingredients</Subtitle>
            <List data={selectedMeal.ingredients}/>
            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps}/>
          </View>
        </View>        
      </ScrollView>
    );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
    rootContainter: {
        marginBottom: 30
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    lsitOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
});