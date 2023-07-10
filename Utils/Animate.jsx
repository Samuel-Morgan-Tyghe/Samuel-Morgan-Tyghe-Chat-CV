import { Box } from "@chakra-ui/react";
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { Children, cloneElement, isValidElement, useRef } from "react";
// @ts-ignore

export function TriggerOnScroll({
  children = <></>,
  withProps = true,
  index = 0,
  stiffness = 100,
  damping = 30,
  restDelta = 0.001,
  transitionLength = 0.9,
  transitionTiming = "cubic-bezier(0.17, 0.55, 0.55, 1)",
  transitionDelay = 0.5,
  offset = ["start end", "end end"],
  shouldAnimateOpacity = false,
  shouldAnimateScaleX = false,
  shouldAnimateScaleY = false,
  shouldAnimateWidth = false,
  shouldAnimateHeight = false,
  shouldAnimateTranslateX = false,
  shouldAnimateTranslateY = false,
  shouldAnimateBackgroundColor = false,
  offSetOutputRange = ["100%", "0%"],
  transformOutputRange = ["0%", "100%"],
  bgColorOutputRange = ["#ff0000", "#ffffff"],
  ...additionalProps
}) {
  const ref = useRef(null);
  const props = withProps ? { ...children.props } : {};

  const { scrollYProgress } = useScroll({ target: ref, offset });
  const animationValue = useSpring(scrollYProgress, {
    stiffness,
    damping,
    restDelta,
  });

  const transformedAnimationValue = useTransform(
    animationValue,
    [0, 1],
    transformOutputRange
  );
  const offSetAnimationValue = useTransform(
    animationValue,
    [0, 1],
    offSetOutputRange
  );
  const bgColor = useTransform(animationValue, [0, 1], bgColorOutputRange);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: shouldAnimateOpacity ? animationValue : 1,
        scaleX: shouldAnimateScaleX ? animationValue : 1,
        scaleY: shouldAnimateScaleY ? animationValue : 1,
        width: shouldAnimateWidth ? transformedAnimationValue : "auto",
        height: shouldAnimateHeight ? transformedAnimationValue : "auto",
        translateX: shouldAnimateTranslateX ? offSetAnimationValue : 0,
        translateY: shouldAnimateTranslateY ? offSetAnimationValue : 0,
        backgroundColor: shouldAnimateBackgroundColor ? bgColor : "",
        border: "1px solid black",
        borderRadius: "8px",
      }}
      layout
      {...props}
      {...additionalProps}
    >
      {children}
    </motion.div>
  );
}

export function ScrollOnView({
  children = <></>,
  withProps = true,
  index = 0,
  transitionDelayVelocity = 1,
  transitionLength = 0.9,
  transitionTiming = "cubic-bezier(0.17, 0.55, 0.55, 1)",
  transitionDelay = 0.5,
  useInViewOnce = true,
  indexOffset = 0,
  ...additionalProps
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: useInViewOnce });
  const props = withProps ? { ...children.props } : {};
  return (
    <Box
      ref={ref}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "translateY(0)" : "translateY(25px)",
        transition: `all ${transitionLength}s ${transitionTiming} ${transitionDelay}s`,
        transitionDelay: `${
          (index + indexOffset) * 10 * transitionDelayVelocity
        }ms`,
      }}
      {...props}
      {...additionalProps}
    >
      {children}
    </Box>
  );
}

export function AnimateAllChildren({
  children,
  withProps = true,
  transitionDelayVelocity = 1,
  transitionLength = 0.5,
  transitionTiming = "cubic-bezier(0.17, 0.55, 0.55, 1)",
  transitionDelay = 0.3,
  useInViewOnce = true,
  scrollOnView = true,
  stiffness = 100,
  damping = 30,
  restDelta = 0.001,
  offset = ["start end", "end end"],
  shouldAnimateOpacity = false,
  shouldAnimateScaleX = false,
  shouldAnimateScaleY = false,
  shouldAnimateWidth = false,
  shouldAnimateHeight = false,
  shouldAnimateTranslateX = false,
  shouldAnimateTranslateY = false,
  shouldAnimateBackgroundColor = false,
  offSetOutputRange = ["100%", "0%"],
  transformOutputRange = ["0%", "100%"],
  bgColorOutputRange = ["#ff0000", "#ffffff"],
  indexOffset = 0,
  ...props
}) {
  const arrayChildren = Children.toArray(children);
  return (
    <>
      {arrayChildren.map((child = <></>, index) =>
        scrollOnView ? (
          <ScrollOnView
            index={index}
            transitionDelayVelocity={transitionDelayVelocity}
            withProps={withProps}
            transitionLength={transitionLength}
            transitionTiming={transitionTiming}
            transitionDelay={transitionDelay}
            useInViewOnce={useInViewOnce}
            indexOffset={indexOffset}
            {...props}
          >
            {child}
          </ScrollOnView>
        ) : (
          <TriggerOnScroll
            stiffness={stiffness}
            damping={damping}
            restDelta={restDelta}
            offset={offset}
            withProps={withProps}
            transitionLength={transitionLength}
            transitionTiming={transitionTiming}
            transitionDelay={transitionDelay}
            shouldAnimateOpacity={shouldAnimateOpacity}
            shouldAnimateScaleX={shouldAnimateScaleX}
            shouldAnimateScaleY={shouldAnimateScaleY}
            shouldAnimateWidth={shouldAnimateWidth}
            shouldAnimateHeight={shouldAnimateHeight}
            shouldAnimateTranslateX={shouldAnimateTranslateX}
            shouldAnimateTranslateY={shouldAnimateTranslateY}
            shouldAnimateBackgroundColor={shouldAnimateBackgroundColor}
            offSetOutputRange={offSetOutputRange}
            transformOutputRange={transformOutputRange}
            bgColorOutputRange={bgColorOutputRange}
          >
            {child}
          </TriggerOnScroll>
        )
      )}
    </>
  );
}

export function TraverseAndAnimate({
  children = <></>,
  withProps = true,
  transitionDelayVelocity = 1,
  transitionLength = 0.9,
  transitionTiming = "cubic-bezier(0.17, 0.55, 0.55, 1)",
  transitionDelay = 0.5,
  useInViewOnce = true,
}) {
  let index = 0;
  const wrapChildren = (children) => {
    const arrayChildren = Children.toArray(children);
    return arrayChildren.length > 1 ||
      arrayChildren[0]?.props?.children?.length > 1 ? (
      arrayChildren.map((child) => {
        index++;
        const innerChild = child.props.children;

        const hasValidElement = Array.isArray(innerChild)
          ? innerChild.some((child) => isValidElement(child))
          : isValidElement(innerChild);

        return innerChild && hasValidElement ? (
          cloneElement(child, undefined, wrapChildren(innerChild))
        ) : (
          <ScrollOnView
            index={index}
            transitionDelayVelocity={transitionDelayVelocity}
            withProps={withProps}
            transitionLength={transitionLength}
            transitionTiming={transitionTiming}
            transitionDelay={transitionDelay}
            useInViewOnce={useInViewOnce}
          >
            {child}
          </ScrollOnView>
        );
      })
    ) : (
      <ScrollOnView
        index={index}
        transitionDelayVelocity={transitionDelayVelocity}
        withProps={withProps}
        transitionLength={transitionLength}
        transitionTiming={transitionTiming}
        transitionDelay={transitionDelay}
        useInViewOnce={useInViewOnce}
      >
        {children}
      </ScrollOnView>
    );
  };

  return <>{wrapChildren(children)}</>;
}
