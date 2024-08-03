import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectFilterName } from "../../redux/filtersSlice";
import { useId } from "react";

export default function SearchBox() {
  const id = useId();
  const dispatch = useDispatch();
  const value = useSelector(selectFilterName);

  const onFilter = (e) => dispatch(changeFilter(e.target.value));

  return (
    <div className={css.container}>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        id={id}
        value={value}
        onChange={onFilter}
      />
    </div>
  );
}
