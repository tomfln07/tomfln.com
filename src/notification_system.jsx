import { useCallback, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function useNotify() {
	const [notifs, set_notifs] = useState([]);

	const add_notif = useCallback((message) => {
		const id = Date.now();
		set_notifs(prev => [...prev, { id, message }]);

		setTimeout(() => del_notif(id), 3000);
	}, []);

	const del_notif = useCallback((id) => {
		set_notifs(prev => prev.filter(notif => notif.id !== id));
	}, []);

	return { notifs, add_notif, del_notif };
}

export function Notification({ notifs }) {
	return (
		<div className="fixed left-1/2 translate-x-[-50%] top-5 max-w-60 z-20 flex flex-col gap-3">
			<AnimatePresence>
				{notifs.map(({ id, message }) => (
					<Notif_element key={id} message={message} />
				))}
			</AnimatePresence>
		</div>
	);
}

function Notif_element({ message }) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, scale: 0.9 }} // Subtle fade-out
			className="p-3 rounded-lg shadow-lg text-white bg-zinc-700"
		>
			{message}
		</motion.div>
	);
}
