
export default function AddMaintenancesForm({children} : {children : React.ReactNode}) {

        

    return (
        <form
         
        >
            {children}
            <input
                type="submit"
                className="rounded bg-green-400 font-bold py-2 w-full cursor-pointer"
                value="Agregar Mantenimiento"
            />
        </form>
    )
}