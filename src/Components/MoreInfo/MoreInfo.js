import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const MoreLess = ({truncatedText, fullText}) => {
  const [more, setMore] = useState(false);
  return (
    <Text>
      {!more ? `${truncatedText}...` : fullText}
      <TouchableOpacity onPress={() => setMore(!more)}>
        <Text>{more ? 'less' : 'more'}</Text>
      </TouchableOpacity>
    </Text>
  );
};

const MoreInfo = ({text, linesToTruncate}) => {
  const [clippedText, setClippedText] = useState(false);
  return clippedText ? (
    <MoreLess truncatedText={clippedText} fullText={text} />
  ) : (
    <Text
      numberOfLines={linesToTruncate}
      ellipsizeMode={'tail'}
      onTextLayout={event => {
        const {lines} = event.nativeEvent;
        let text = lines
          .splice(0, linesToTruncate)
          .map(line => line.text)
          .join('');
        setClippedText(text.substr(0, 250));
      }}>
      {text}
    </Text>
  );
};

export default MoreInfo;
