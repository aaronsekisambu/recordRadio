import React, { memo } from 'react';
// ----------------------------- UI kitten -----------------------------------
import { CheckBox } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { Text, VStack, HStack } from 'components';

interface IOptionalProps {
  title: string;
  list_option: Array<IOptionProps>;
  selected: number;
  onChange?: (index: number)=>void
}
interface IOptionProps {
  name: string;
  price: string;
}

const Optional = memo(({ title, list_option, selected, onChange }: IOptionalProps) => {
  return (
    <VStack gap={16} padding={16} level="2" border={16}>
      <Text category="h4">{title}</Text>
      {list_option.map((item, i) => {
        const active = i == selected;
        return (
          //@ts-ignore
          <HStack key={i} onPress={()=>onChange(i)} itemsCenter>
            <HStack justify="flex-start" gap={12}>
             {/* @ts-ignore */}
            <CheckBox checked={active} size="large" onChange={()=>onChange(i)}></CheckBox>
            <Text category={active ? 'h5' : 'body'} status={!active ? 'platinum' : 'basic'}>
              {item.name}
            </Text>
            </HStack>
            {active&&<Text category='h5' status='warning'>{item.price}</Text>}
          </HStack>
        );
      })}
    </VStack>
  );
});

export default Optional;
