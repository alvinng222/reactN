/**
 * @property {string} type - Modal Type
 * to determine which type of modal to render ['fullScreen' , 'default' , 'bottom']
 *
 */

// Define different type of Modal
// All modal containe close button , and confirm button (required props.textButton to render)
// DefaultModal = height 450,
// ResponsiveModal = minheight 270, adjustable height (define by props.viewHeight)

import React from 'react';
import { SafeAreaView, Dimensions, StyleSheet } from 'react-native';
import BaseModal from 'react-native-modal';
import { Color } from '@constants';
import Header from '@components/Header';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const Modal = (props) => {
  if (props.type === 'fullScreen') {
    return <FullPageModal {...props} />;
  } else if (props.type === 'bottom') {
    return <BottomModal {...props} />;
  }
  return <DefaultModal {...props} />;
};

// base ui component
const CustomModal = ({
  onRequestClose,
  children,
  modalStyle,
  viewStyle,
  onBackdropPress,
  noHeader,
  cleanModal, // whether show preset Safeareaview or not
  ...props
}) => {
  return (
    <BaseModal
      backdropTransitionOutTiming={0}
      hideModalContentWhileAnimating
      onBackdropPress={onBackdropPress || onRequestClose}
      onBackButtonPress={onRequestClose}
      propagateSwipe
      {...props}
      style={{ margin: 0, ...modalStyle }}>
      {!cleanModal ? (
        <SafeAreaView style={viewStyle}>
          {!noHeader && (
            <Header
              isClose
              onBack={onRequestClose}
              headerStyle={{ borderBottomWidth: 0 }}
              {...props}
            />
          )}
          {children}
        </SafeAreaView>
      ) : (
        <>{children}</>
      )}
    </BaseModal>
  );
};

const DefaultModal = ({ customStyle, modalHeight, ...props }) => {
  return (
    <CustomModal
      statusBarTranslucent
      {...props}
      modalStyle={{ alignItems: 'center' }}
      viewStyle={[
        styles.modal,
        modalHeight && { height: modalHeight, maxHeight: modalHeight },
        customStyle,
      ]}
    />
  );
};

const BottomModal = ({ customStyle, ...props }) => {
  return (
    <CustomModal
      statusBarTranslucent
      {...props}
      modalStyle={{ justifyContent: 'flex-end' }}
      viewStyle={[styles.bottomModal, customStyle]}
    />
  );
};
const FullPageModal = ({ customStyle, ...props }) => {
  return (
    <CustomModal
      {...props}
      modalStyle={{ justifyContent: 'flex-end' }}
      viewStyle={[styles.fullPageModal, customStyle]}
    />
  );
};

export default Modal;

const styles = StyleSheet.create({
  modal: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: Color.bgDefault,
    maxHeight: '70%',
    height: height > 800 ? 500 : '50%',
    width: width > 450 ? 350 : '70%',
  },
  fullPageModal: {
    flex: 1,
    backgroundColor: Color.bgDefault,
  },
  bottomModal: {
    alignSelf: 'center',
    width: width > 500 ? 500 : '100%',
    backgroundColor: Color.bgDefault,
    maxHeight: '95%',
    minHeight: 120,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    overflow: 'hidden',
  },
});
