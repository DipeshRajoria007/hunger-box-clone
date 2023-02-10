import React from 'react'
import { useParams } from "react-router";
import {Restaurants} from "../Data/Restaurants"
import ItemCard from '../Components/ItemCard';
import {FaRegSadCry} from "react-icons/fa"
const Vendor = () => {

    const {restaurantName} = useParams();
    const data = Restaurants.filter((restaurant )=> {
      return restaurant.items[0].name === restaurantName;
    } )
    const Data = data[0].items[0].entries.items;
    // console.log(Data , "Main Data")


    const finalArray = Data.map((e)=>{
      if(e.entries.items.length!==0)
      return {
        name : e.name,
        food :e.entries.items,
      }
      
    })

    // const Element = finalArray.map((object,index)=>{
    //   // console.log(object.food,"Object Food")
    //       let name = object.name;
    //        return object.food.map((subObject)=>{
    //           console.log(subObject,"Sub Object")
    //             return {
    //               "CusineName" : name,
    //               "food" : subObject 
    //           };
    //         })
        
    //     })

        // for(var i=0; i<Element.length; i++)
        //   console.log(Element[i] , "Elemt" , i);
        // console.log(Element,"Element")
      if(finalArray[0]===undefined)
      {
        return (<div className='flex flex-col justify-center items-center w-screen h-screen' >
          <div>Sorry! Not delivering any food items Right now </div>
          <FaRegSadCry className='text-[30rem] opacity-10' />
        </div>)
      }
      let final = [];
      for(var i=0; i<finalArray.length; i++)
      {
        let currArray = finalArray[i].food;
        let cusine = finalArray[i].name;
        for(var j=0; j<currArray.length; j++){
          let currObject = {
            "CusineName" : cusine,
            "food" : currArray[j],
          }
          final.push(currObject);
        }
      }

      console.log(final)


  return (
    <div>
      {
        final.map((object,index)=>(<ItemCard key={index} cusine={object.CusineName} food={object.food} />))

        
      }
    </div>
  )
}

export default Vendor