import { useReducer } from "react";
import { getAvatarItemSet, baseAvatar } from "./avatar";
import { avatarPalettes } from "./items";

const baseMale = baseAvatar('M');
const baseFemale = baseAvatar('F');

const { maleItemChoices, femaleItemChoices } = getAvatarItemSet();

const initial = {
  avatarM: baseMale,
  avatarF: baseFemale,
  choicesM: maleItemChoices,
  choicesF: femaleItemChoices,
  gender: 'M',
  category: Object.keys(maleItemChoices)[0],
  itemIndex: Object.values(maleItemChoices)[0].findIndex(obj => obj.name === baseMale[Object.keys(maleItemChoices)[0]].name),
  scrollIndex: Object.values(maleItemChoices)[0].findIndex(obj => obj.name === baseMale[Object.keys(maleItemChoices)[0]].name),
  currentColors: (() => {
    const currentColors = {};
    Object.entries(baseMale).forEach((entry) => {
      currentColors[entry[0]] = [...entry[1].colors];
      const colorCount = entry[1].colors.length;
      const palette = Object.values(avatarPalettes[entry[0]].default);

      for (let i = colorCount; 3 > i; i++) {
        currentColors[entry[0]].push(palette[Math.round(Math.round((palette.length - 1) * Math.ceil(Math.random() * 100))/100)]);
      }
    });
    return currentColors;
  })()
};

const reducer = (state, action) => {
  let choices, initItemIndex, avatar, category;

  switch (action.type) {
    case 'setMale':
      return { ...state, gender: 'M', itemIndex: state.choicesM[state.category].findIndex(obj => obj.name === state.avatarM[state.category].name) };

    case 'setFemale':
      return {...state, gender: 'F', itemIndex: state.choicesF[state.category].findIndex(obj => obj.name === state.avatarF[state.category].name) };

    case 'setCategory':
      category = action.payload;
      avatar = state[`avatar${state.gender}`];
      choices = state[`choices${state.gender}`];
      initItemIndex = choices[category].findIndex(obj => obj.name === state[`avatar${state.gender}`][category].name);
      return {...state, category: action.payload, itemIndex: initItemIndex, scrollIndex: initItemIndex};

    case 'setScrollIndex':
      return {...state, scrollIndex: action.payload};

    case 'previewItem':
      return {...state, itemIndex: action.payload};

    case 'equipItem':
      const itemToEquip = {...state[`choices${state.gender}`][state.category][state.scrollIndex]};
      itemToEquip.colors = state.currentColors[itemToEquip.subtype];
      const { colors, name, type } = itemToEquip;

      return {
        ...state,
        itemIndex: state.scrollIndex,
        [`avatar${state.gender}`]: {
          ...state[`avatar${state.gender}`],
          [state.category]: {colors, name, type} 
        }
      };

    case 'setColor':
      const categoryColors = state.currentColors[state.category];
      categoryColors[payload.itemColorIndex] = payload.colorHex;
      const maleItem = state.avatarM[state.category];
      const femaleItem = state.avatarF[state.category];

      const maleItemScheme = state.choicesM[state.category].find(obj => obj.name === maleItem.name).scheme;
      const femaleItemScheme = state.choicesF[state.category].find(obj => obj.name === femaleItem.name).scheme;

      const maleItemColors = categoryColors.slice(0, maleItemScheme);
      const femaleItemColors = categoryColors.slice(0, femaleItemColors);

      return {...state,
        avatarM: {
          ...state.avatarM,
          [state.category]: {
            ...state.avatarM[state.category],
            colors: maleItemColors
          }
        },
        avatarF: {
          ...state.avatarF,
          [state.category]: {
            ...state.avatarF[state.category],
            colors: femaleItemColors
          }
        },
        currentColors: {
        ...state.currentColors,
        [state.category]: categoryColors
      }};

    default: return state;
  }
}

export const AvatarBuilder = (avatarData=null) => {
  const [state, dispatch] = useReducer(reducer, initial);

  const gender = state.gender;
  
  const [avatar, choices, category, itemIndex, scrollIndex, currentColors] = state.gender === 'M' ? [state.avatarM, state.choicesM, state.category, state.itemIndex, state.scrollIndex, state.currentColors] : [state.avatarF, state.choicesF, state.category, state.itemIndex, state.scrollIndex, state.currentColors];
  
  const categories = Object.keys(choices);
  
  const items = choices[category];

  const palette = avatarPalettes[category];
  
  const item = items[itemIndex];
  
  const setMale = () => dispatch({type: 'setMale'});
  const setFemale = () => dispatch({type: 'setFemale'});
  const setCategory = (payload) => dispatch({type: 'setCategory', payload: payload});
  const setScrollIndex = (payload) => dispatch({type: 'setScrollIndex', payload: payload});
  const previewItem = (payload) => dispatch({type: 'previewItem', payload: payload});
  const equipItem = () => dispatch({type: 'equipItem'});
  const setColor = (payload) => dispatch({type: 'setColor', payload: payload})
  
  item['colors'] = state.currentColors[category].slice(0, item.scheme);
  
  return { avatar, choices, gender, categories, category, items, itemIndex, scrollIndex, item, palette, currentColors, setMale, setFemale, setCategory, setScrollIndex, previewItem, equipItem, setColor };
}