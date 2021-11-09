import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_SHOW_PROFILE } from "../../store/profile/action";

export function Profile() {
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state.isShow);

  return (
      <div>
        <h1>Страница профиля</h1>

        <input
          type="checkbox"
          checked={isShow}
          onChange={() => {
            dispatch({
              type: TOGGLE_SHOW_PROFILE,
            });
          }}
        />
      </div>
  );
}
