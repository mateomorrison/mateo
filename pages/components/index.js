import { motion } from "framer-motion";

export default function Components() {
  return null;
}

// logo

export function Logo({ children }) {
  return <p class="is-size-1">{children}</p>;
}

// wrappers

export function Wrapper({ children }) {
  return <div className="container">{children}</div>;
}

export function CardWrapper({ type, children }) {
  if (type == "short")
    return (
      <>
        <div class="buttons">{children}</div>
        <div>{children}</div>
      </>
    );
  if (type == "full") return <div class="container">{children}</div>;
  else return <p>doesnt work</p>;
}

// cards

export function Card({ type, onPress, children }) {
  if (type == "long")
    return (
      <motion.div
        initial={{ x: -25 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.25 }}
        whileHover={{ scale: 0.99 }}
        whileTap={{ opacity: 0.25 }}
        style={{
          backgroundColor: "#555",
        }}
        className="card py-5 my-5 has-text-centered"
        onClick={onPress}
      >
        {children}
      </motion.div>
    );
  if (type == "short")
    return (
      <>
        <div style={{}} className="button is-large is-light is-inverted">
          {children}
        </div>
        <div style={{}} className="button is-large is-light is-inverted">
          {children}
        </div>
      </>
    );
  else return <div className="card">{children}</div>;
}

// text

export function P({ children }) {
  return <p style={{ color: "#f7f7f7", fontSize: "1.5em" }}>{children}</p>;
}

// buttons
