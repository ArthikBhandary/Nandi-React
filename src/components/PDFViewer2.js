import PDFViewer from "pdf-viewer-reactjs/dist/pdf-viewer-reactjs";

// PDFViewer accepts state change only if external input is true but that also hides navbar
// This is a quick workaround, but might break so should be tested before usage
export default class PDFViewer2 extends PDFViewer{
    static getDerivedStateFromProps(props, state) {
        // if (!props.externalInput) {
        //     return null
        // }

        if (props.page !== state.prevPropPage) {
            if (1 <= props.page && props.page <= state.pages) {
                return { page: props.page, prevPropPage: props.page }
            }
        }
        if (props.scale !== state.prevPropScale) {
            if (props.minScale <= props.scale && props.scale <= props.maxScale) {
                return { scale: props.scale, prevPropScale: props.scale }
            }
        }
        if (props.rotationAngle !== state.prevPropRotationAngle) {
            if (
                props.rotationAngle === 90 ||
                props.rotationAngle === 0 ||
                props.rotationAngle === -90
            ) {
                return {
                    rotationAngle: props.rotationAngle,
                    prevPropRotationAngle: props.rotationAngle,
                }
            }
        }
        return null
    }
}