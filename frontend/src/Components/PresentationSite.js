import React from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GavelIcon from '@material-ui/icons/Gavel';
import CreateIcon from '@material-ui/icons/Create';
import InfoSiteBg from './img/InfoSiteBg.jpg';


function PresentationSite() {
    return (
        <div className="py-20 px-4">
            <div className=" bg-no-repeat bg-cover bg-center" style={{
                backgroundImage: `url("${InfoSiteBg}")`
            }}>
                <div className=" bg-opacity-25 py-3 px-3 bg-gray-100">
                    <div className="grid grid-cols-3  gap-4 text-center bg-gray-100" >
                        <div className="p-10">
                            <div className="pb-12">
                                <MailOutlineIcon style={{fontSize: '50px'}}/>
                            </div>
                            {/* eslint-disable-next-line */}
                            <a>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</a>
                        </div>
                        <div className="p-10">
                            <div className="pb-12">
                                <GavelIcon style={{fontSize: '50px'}} />
                            </div>
                            {/* eslint-disable-next-line */}
                            <a>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</a>
                        </div>
                        <div className="p-10">
                            <div className="pb-12">
                                <CreateIcon style={{fontSize: '50px'}}/>
                            </div>
                            {/* eslint-disable-next-line */}
                            <a>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen de polices de texte. Il n'a pas fait que survivre cinq siècles, mais s'est aussi adapté à la bureautique informatique, sans que son contenu n'en soit modifié. Il a été popularisé dans les années 1960 grâce à la vente de feuilles Letraset contenant des passages du Lorem Ipsum, et, plus récemment, par son inclusion dans des applications de mise en page de texte, comme Aldus PageMaker.</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PresentationSite
