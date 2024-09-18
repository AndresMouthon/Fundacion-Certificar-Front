import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import { RUTASPUBLICAS, RUTASSECRETARIA } from "../models/rutas.model";
import { crearAcceso, resetearAcceso } from "../redux/rolSlice.redux";
import { login } from "../services/AuthService";
import { crearStorage, removerStorage } from "../utils/localStorage/localStorage.util";

function useAuth() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [openAside, setOpenAside] = useState(false);
    const [openNav, setOpenNav] = useState(false);
    const [loading, setLoading] = useState(false);
    const [usuario, setUsuario] = useState({
        cedula: "",
        password: "",
    });

    const toggleAside = useCallback(() => {
        setOpenAside((prevOpenAside) => !prevOpenAside);
        setOpenNav(false);
    }, []);

    const toggleNav = useCallback(() => {
        setOpenNav((prevOpenNav) => !prevOpenNav);
        setOpenAside(false);
    }, []);

    function handleChange({ target }) {
        setUsuario({
            ...usuario,
            [target.name]: target.value,
        });
    };

    async function iniciarSesion() {
        if (usuario.cedula === "" || usuario.password === "") {
            toast.warning("Por favor rellene todos los campos");
        } else {
            setLoading(true);
            try {
                const response = await login(usuario);
                setLoading(false);
                if (response.token) {
                    dispatch(crearAcceso(response.rol));
                    crearStorage("token", response.token);
                    navigate(RUTASSECRETARIA.PACIENTES);
                } else {
                    setUsuario({ cedula: "", password: "" });
                    toast.warn(response.message);
                };
            } catch (error) {
                console.log(error);
            };
        };
    };

    const cerrarSesion = useCallback((e) => {
        e.preventDefault();
        setOpenNav(false);
        Swal.fire({
            title: '¿Quiere cerrar la sesión actual?',
            icon: 'question',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, salir!',
            cancelButtonText: 'No'
        }).then((result) => {
            if (result.isConfirmed) {
                removerStorage("token");
                dispatch(resetearAcceso());
                navigate(RUTASPUBLICAS.LOGIN, { replace: true });
            }
        })
    }, [toggleNav]);

    return {
        openNav,
        openAside,
        usuario,
        loading,
        toggleNav,
        toggleAside,
        handleChange,
        iniciarSesion,
        cerrarSesion,
    }
}

export default useAuth;
