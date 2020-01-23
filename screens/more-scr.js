import React, { Component } from 'react';

import { Alert, LayoutAnimation, StyleSheet, View, Text, ScrollView, UIManager, TouchableOpacity, Platform, Image } from 'react-native';

class Expandable_ListView extends Component {

  constructor() {

    super();

    this.state = {

      layout_Height: 0

    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item.expanded) {
      this.setState(() => {
        return {
          layout_Height: null
        }
      });
    }
    else {
      this.setState(() => {
        return {
          layout_Height: 0
        }
      });
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.layout_Height !== nextState.layout_Height) {
      return true;
    }
    return false;
  }

  show_Selected_Category = (item) => {

    // Write your code here which you want to execute on sub category selection.
    Alert.alert(item);

  }

  render() {
    return (
      
      <View style={styles.Panel_Holder}>
        <TouchableOpacity activeOpacity={0.8} onPress={this.props.onClickFunction} style={styles.category_View}>
          <Image
            source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2019/02/arrow_right_icon.png' }}
            style={styles.iconStyle} />
          <Text style={styles.category_Text}>{this.props.item.category_Name} </Text>
          

        </TouchableOpacity>
         <View style={{ width: '100%', height: 1, backgroundColor: '#e0e0e0' }} />

        <View style={{ height: this.state.layout_Height, overflow: 'hidden' }}>

          {
            this.props.item.sub_Category.map((item, key) => (

              <TouchableOpacity key={key} style={styles.sub_Category_Text} onPress={this.show_Selected_Category.bind(this, item.name)}>

                <Text> {item.name} </Text>

                <View style={{ width: '100%', height: 1, backgroundColor: '#e0e0e0' }} />

              </TouchableOpacity>

            ))
          }

        </View>

      </View>

    );
  }
}



export default class MoreScreen extends Component {

  constructor() {
    super();

    if (Platform.OS === 'android') {

      UIManager.setLayoutAnimationEnabledExperimental(true)

    }

    const array = [

      {
        expanded: false, category_Name: "Women", sub_Category: [{ id: 1, name: 'Shirt' }, { id: 2, name: 'T-shirt' }, { id: 3, name: 'Skirt' },
        { id: 4, name: 'Infinix' }, { id: 5, name: 'Oppo' }, { id: 6, name: 'Apple' }, { id: 7, name: 'Honor' }]
      },

      {
        expanded: false, category_Name: "Men", sub_Category: [{ id: 8, name: 'Dell' }, { id: 9, name: 'MAC' }, { id: 10, name: 'HP' },
        { id: 11, name: 'ASUS' }]
      },

      {
        expanded: false, category_Name: "Computer Accessories", sub_Category: [{ id: 12, name: 'Pendrive' }, { id: 13, name: 'Bag' },
        { id: 14, name: 'Mouse' }, { id: 15, name: 'Keyboard' }]
      },

      {
        expanded: false, category_Name: "Home Entertainment", sub_Category: [{ id: 16, name: 'Home Audio Speakers' },
        { id: 17, name: 'Home Theatres' }, { id: 18, name: 'Bluetooth Speakers' }, { id: 19, name: 'DTH Set Top Box' }]
      },

      {
        expanded: false, category_Name: "TVs by brand", sub_Category: [{ id: 20, name: 'Mi' },
        { id: 21, name: 'Thomson' }, { id: 22, name: 'LG' }, { id: 23, name: 'SONY' }]
      },

      {
        expanded: false, category_Name: "Kitchen Appliances", sub_Category: [{ id: 24, name: 'Microwave Ovens' },
        { id: 25, name: 'Oven Toaster Grills (OTG)' }, { id: 26, name: 'Juicer/Mixer/Grinder' }, { id: 27, name: 'Electric Kettle' }]
      }
    ];

    this.state = { AccordionData: [...array] }
  }

  update_Layout = (index) => {

    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

    const array = [...this.state.AccordionData];

    array[index]['expanded'] = !array[index]['expanded'];

    this.setState(() => {
      return {
        AccordionData: array
      }
    });
  }

  render() {
    return (
      <View style={styles.MainContainer}>
                <View><Text style={styles.headerText}>More Category</Text></View>

        <ScrollView contentContainerStyle={{ paddingHorizontal: 10, paddingVertical: 5 }}>
          {
            this.state.AccordionData.map((item, key) =>
              (
                <Expandable_ListView key={item.category_Name} onClickFunction={this.update_Layout.bind(this, key)} item={item} />
              ))
          }
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({

  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
    backgroundColor: '#ffffff',
  },
  headerText:{
    fontSize:18,
    color:'#7f7f7f',
    textAlign:'center'
  },
  iconStyle: {

    width: 10,
    height: 20,
    marginRight:10,
    justifyContent: 'flex-startv',
    alignItems: 'center',
    tintColor: '#e0e0e0'

  },

  sub_Category_Text: {
    fontSize: 15,
    color: '#263238',
    padding: 10,
    backgroundColor:'#fafafa'
  },

  category_Text: {
    textAlign: 'left',
    color: '#263238',
    fontSize: 15,
  
  },

  category_View: {
    marginVertical: 15,
    flexDirection: 'row',
    
    alignItems: 'center',
    backgroundColor: '#ffffff'
  },

  Btn: {
    padding: 10,
    backgroundColor: '#ffffff'
  }

});