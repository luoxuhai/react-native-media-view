import type { ComponentProps } from 'react';
import { type ImageRequireSource, Image } from 'react-native';
import AvifViewNativeComponent, {
  type AvifViewComponent,
  type AvifSourceProps,
  type ResizeMode,
} from './AvifViewNativeComponent';

export type { AvifSourceProps, ResizeMode, AvifViewComponent };

/** @deprecated Use ResizeMode instead */
export type ContentMode = ResizeMode;

type NativeProps = ComponentProps<typeof AvifViewNativeComponent>;

export interface AvifViewProps extends Omit<NativeProps, 'source'> {
  /** Source of the AVIF image - use require('./path/to/image.avif') */
  source: ImageRequireSource;
  /** Resize mode for image display (aligned with React Native Image) */
  resizeMode?: ResizeMode;
}

/**
 * AvifView - A React Native component for displaying AVIF images
 * Supports both static and animated AVIF images
 */
export function AvifView(props: AvifViewProps) {
  const { source, resizeMode = 'contain', ...restProps } = props;

  const resolved = Image.resolveAssetSource(source);
  const resolvedSource: AvifSourceProps = {
    uri: resolved?.uri || '',
  };

  return (
    <AvifViewNativeComponent
      {...restProps}
      source={resolvedSource}
      resizeMode={resizeMode}
    />
  );
}

export default AvifView;
