
import { SvgrProps, mergeSvgrProps } from "./svgProps"

export function LogoIconSm({ width, height, className }: SvgrProps) {

  const props = mergeSvgrProps({ width, height, className })
  return (
    <svg className={className} width={props.width} height={props.height} viewBox="0 0 28 29" fill="white" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.9977 0.620117C13.6135 0.620117 13.2292 0.633838 12.8541 0.665854V2.03338C13.2155 1.95563 13.5997 1.91904 14.0023 1.91904C14.4003 1.91904 14.7799 1.95563 15.1413 2.03338V0.665854C14.7662 0.633838 14.382 0.620117 13.9977 0.620117ZM18.778 24.2523C18.7505 24.3026 18.7277 24.3529 18.7002 24.4032C18.6956 24.4078 18.6956 24.4123 18.6911 24.4169C18.6956 24.4123 18.6956 24.4078 18.6956 24.4032L17.2959 24.8651L19.2217 23.2918C19.089 23.6348 18.9381 23.955 18.778 24.2523ZM9.32266 24.4352C9.31351 24.4261 9.30894 24.4169 9.30436 24.4078C9.28149 24.362 9.25404 24.3117 9.23117 24.266C9.07107 23.9687 8.92011 23.644 8.78288 23.2964L10.6996 24.8651L9.30894 24.4078C9.31351 24.4169 9.31809 24.4261 9.32266 24.4352ZM28 14.6201C28 14.3457 27.9909 14.0713 27.9771 13.7969L21.5638 19.0291L27.634 11.4185C27.4236 10.5221 27.1263 9.66226 26.7558 8.84357L20.4339 16.7789C20.3653 18.0504 20.2418 19.2167 20.0497 20.264C20.0131 20.4973 19.9673 20.726 19.917 20.9455L16.4084 23.8132L20.4339 16.7103C20.4476 16.3764 20.4614 16.038 20.4705 15.6904V15.6858L25.0541 6.02619C24.5463 5.37673 23.9837 4.77301 23.3753 4.22417L20.2921 10.7234C20.3973 11.6975 20.4568 12.7403 20.4751 13.8609L15.3334 22.9213L18.4852 4.48487C18.9518 5.22123 19.3315 6.10852 19.6288 7.14217L20.7267 2.33982C20.0497 1.96935 19.3361 1.64919 18.595 1.39307L18.0369 3.84913C17.8128 3.57013 17.5749 3.32316 17.3233 3.10819L13.9977 22.592L10.6721 3.11277C10.4205 3.3323 10.1827 3.57928 9.96308 3.8537L9.40043 1.39764C8.65937 1.65377 7.94576 1.96935 7.26875 2.34439L8.37118 7.15589C8.66852 6.11767 9.04819 5.2258 9.51479 4.48944L12.6574 22.9168L7.52491 13.8609C7.54321 12.7449 7.60268 11.7021 7.70332 10.7325L4.62016 4.22874C4.01176 4.77758 3.44911 5.37673 2.94592 6.03077L7.52949 15.6949C7.53864 16.0425 7.55236 16.381 7.56609 16.7103V16.7149L11.5961 23.8223L8.08299 20.9501C8.03267 20.726 7.98693 20.5019 7.95034 20.264C7.75821 19.2167 7.6347 18.0504 7.57066 16.7789L1.23967 8.84815C0.873714 9.66683 0.576377 10.5267 0.365954 11.4185L6.44535 19.0383L0.0228726 13.8014C0.00914936 14.0713 0 14.3457 0 14.6201C0 15.3931 0.0640417 16.1477 0.182976 16.8841L5.34292 21.0919L0.617546 18.741C0.978925 19.9164 1.49126 21.0278 2.13168 22.0478L5.82781 23.8864L3.04199 23.333C3.73272 24.202 4.51952 24.984 5.39324 25.6655C5.686 25.8896 5.98791 26.1046 6.2944 26.3104C8.50384 27.7694 11.1524 28.6201 13.9977 28.6201C16.843 28.6201 19.4962 27.7694 21.7056 26.3104H21.7102C22.0167 26.1046 22.314 25.8896 22.6068 25.6655C23.4805 24.984 24.2719 24.1974 24.9626 23.333L22.1676 23.8864L25.8729 22.0478C26.5133 21.0278 27.0257 19.9164 27.387 18.7364L22.6525 21.0919L27.817 16.8795C27.936 16.1431 28 15.3885 28 14.6201Z" />
    </svg>
  )
}