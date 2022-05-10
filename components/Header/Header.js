/**
 * Styling the default ui Kitten topNavigation
 *
 * @property {() => functions} onBack - Function
 * if back function given, will render back button
 *
 * @property {boolean} isClose - boolean
 * if true , render close icon instead of back icon
 *
 * @property {string} title - title for Header
 *
 * @property {()=> ReactElement} accessoryCenter - Functional Component
 * used for render custom component in the center of the header
 *
 * @property {boolean} noBorder - Functional Component
 * to determine whether show border or not, default false
 *
 */

import React from 'react';
import { TopNavigation, TopNavigationAction, Icon } from '@ui-kitten/components';
import { Color } from '@constants';
import Text from '@components/Text';
import { useTranslation } from 'react-i18next';

export default function Header({
  title = null,
  accessoryCenter,
  onBack,
  isClose,
  headerStyle,
  textStyle,
  noBorder,
  ...props
}) {
  const { t } = useTranslation();

  const renderBackAction = () => {
    if (onBack) {
      return (
        <TopNavigationAction
          icon={(iconProps) => <Icon {...iconProps} name={isClose ? 'close' : 'arrow-back'} />}
          onPress={onBack}
        />
      );
    }
    return null;
  };

  return (
    <TopNavigation
      style={[
        { borderBottomColor: Color.stroke, borderBottomWidth: 1 },
        headerStyle,
        noBorder && { borderBottomWidth: 0 },
      ]}
      alignment="center"
      accessoryLeft={renderBackAction}
      title={
        accessoryCenter ? (
          accessoryCenter
        ) : (
          <Text type="title" style={textStyle}>
            {t(title)}
          </Text>
        )
      }
      {...props}
    />
  );
}
