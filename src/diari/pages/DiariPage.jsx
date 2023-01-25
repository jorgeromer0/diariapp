import { AddOutlined, MailOutline } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { startNewNote } from "../../store/Diari/thunks";
import { DiariLayout } from "../layout/DiariLayout";
import { NoteView, NothingSelectedView } from "../views";

export const DiariPage = () => {
  const dispatch = useDispatch();

  const { isSaving, active } = useSelector((state) => state.diari);
  const onClickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <DiariLayout>
      {/* <Typography>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolorum
        cumque excepturi aperiam consectetur vel odit nulla nisi aliquam ipsam
        illum exercitationem maiores quibusdam laborum sit eos molestias.
        Soluta, a.
      </Typography> */}

      {!!active ? <NoteView /> : <NothingSelectedView />}

      {/* NothingSelect */}

      {/* NoteView */}
      {/* <NoteView /> */}

      <IconButton
        size="large"
        onClick={onClickNewNote}
        disabled={isSaving}
        sx={{
          color: "white",
          backgroundColor: "error.main",
          ":hover": { backgroundColor: "error.main", opacity: 0.9 },
          position: "fixed",
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>
    </DiariLayout>
  );
};
